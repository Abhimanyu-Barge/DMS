package Routes

import (
	TestApi "DMS/DMS_Server/API/TestApi"
	Middleware "DMS/DMS_Server/Middleware"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {

	router := gin.Default()
	router.Use(Middleware.Logger())
	// Open Api Group
	o := router.Group("/o")
	// Restricted  Api Group
	r := router.Group("/r", Middleware.AuthRequired())

	// Register Your Api
	TestApi.Init(o, r)

	return router
}
