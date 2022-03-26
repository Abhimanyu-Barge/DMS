package utils

import (
	"Server/model"
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/eefret/gomdb"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func SearchMongoDb(data *model.Search) bson.M {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb://127.0.0.1:27017"))
	if err != nil {
		panic(err)
	}
	defer func() {
		if err := client.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()
	coll := client.Database("local").Collection("movies")
	var result bson.M
	err1 := coll.FindOne(context.TODO(), bson.D{{data.SearchBy, data.SearchData}}).Decode(&result)
	if err1 == mongo.ErrNoDocuments {
		lastresult := findGomdb(data)
		data, err := bson.Marshal(lastresult)
		if err != nil {

		}
		result := bson.M{}
		err = bson.Unmarshal(data, &result)
		return result
	}
	return result

}

func findGomdb(data *model.Search) model.Movies {
	api := gomdb.Init("2ad39415")
	query := &gomdb.QueryData{Title: data.SearchData, SearchType: gomdb.MovieSearch}
	res, err := api.Search(query)
	if err != nil {
		fmt.Println(err)
	}
	movieData := model.Movies{}
	for index, movies := range res.Search {
		if index == 0 {
			movieData = updateMoviesData(movies.ImdbID)
		} else {
			updateMoviesData(movies.ImdbID)
		}
	}
	return movieData
}
func updateMoviesData(ImdbID string) model.Movies {
	reqUrl := "http://www.omdbapi.com/?i=" + ImdbID + "&apikey=2ad39415"
	resp, err := http.Get(reqUrl)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal(err)
	}
	movieData := model.Movies{}
	err = json.Unmarshal(body, &movieData)
	if err != nil {
		fmt.Printf("matshalling error")
	}
	inserMoviesData(movieData)
	return movieData
}

func inserMoviesData(movie model.Movies) {
	// fmt.Println(movie)
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb://127.0.0.1:27017"))
	if err != nil {
		panic(err)
	}
	defer func() {
		if err := client.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()
	coll := client.Database("local").Collection("movies")
	result, err := coll.InsertOne(context.TODO(), movie)
	if err != nil {
		panic(err)
	}
	fmt.Println(result)
}

func SearchMovieByYear(data *model.Search) []bson.M {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb://127.0.0.1:27017"))
	if err != nil {
		panic(err)
	}
	defer func() {
		if err := client.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()
	coll := client.Database("local").Collection("movies")
	var movies []bson.M
	cursor, err := coll.Find(context.TODO(), bson.M{data.SearchBy: data.SearchData})
	if err != nil {
		panic(err)
	}
	if err = cursor.All(context.TODO(), &movies); err != nil {
		panic(err)
	}
	return movies
}
