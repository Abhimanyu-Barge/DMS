package api

import (
	"Server/model"
	"Server/utils"

	"go.mongodb.org/mongo-driver/bson"
)

func SearchMovie(data *model.Search) []bson.M {
	searchResult := []bson.M{bson.M{"error": "invalid search ", "message": "search not found"}}
	if data.SearchBy == "title" || data.SearchBy == "imdbid" {
		searchResultdata := utils.SearchMongoDb(data)
		searchResult = []bson.M{searchResultdata}
	} else if data.SearchBy == "year" || data.SearchBy == "imdbrating" || data.SearchBy == "genre" {
		searchResult = utils.SearchMovieByYear(data)
	}

	return searchResult
}
