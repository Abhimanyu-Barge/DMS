package Models

import (
	"DMS/DMS_Server/Config"

	_ "github.com/go-sql-driver/mysql"
)

func GetAllTodos(todo *[]Todo) (err error) {
	if err = Config.DB.Find(todo).Error; err != nil {
		return err
	}
	return nil
}
