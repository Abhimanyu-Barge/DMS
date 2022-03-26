package main

import (
	// model "Search/model/search"
	search "Server/api/search"
	model "Server/model"
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		// search.SearchMovieByTitle()
		return c.String(http.StatusOK, "Hello, World!")
	})
	// movie search search api
	e.POST("/search", func(c echo.Context) error {
		data := new(model.Search)
		if err := c.Bind(data); err != nil {
			return err
		}

		result := search.SearchMovie(data)
		return c.JSON(http.StatusOK, result)
	})

	e.Logger.Fatal(e.Start(":8081"))
}
