package TestApi

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Init(o *gin.RouterGroup, r *gin.RouterGroup) {
	o.GET("openApi", OpenApiTest)
	r.GET("testginApi", TestGinApi)

}

func TestGinApi(c *gin.Context) {

	c.JSON(http.StatusOK, "testApi")
}
func OpenApiTest(c *gin.Context) {
	c.JSON(http.StatusOK, "Open Api")
}
