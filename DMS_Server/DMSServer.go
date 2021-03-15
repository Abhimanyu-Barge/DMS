package main

import (
	"DMS/DMS_Server/Routes"
)

var err error

func main() {
	// Start Server on Port
	r := Routes.SetupRouter()
	r.Run(":8081")
}
