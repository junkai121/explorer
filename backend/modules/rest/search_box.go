package rest

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/irisnet/explorer/backend/service"
	"github.com/irisnet/explorer/backend/types"
	"net/http"
)

func RegisterTextSearch(r *mux.Router) error {
	funs := []func(*mux.Router) error{
		registerQueryText,
	}

	for _, fn := range funs {
		if err := fn(r); err != nil {
			return err
		}
	}
	return nil
}

func registerQueryText(r *mux.Router) error {
	r.HandleFunc(types.UrlRegisterQueryText, func(writer http.ResponseWriter, request *http.Request) {
		args := mux.Vars(request)
		text := args["text"]

		result := service.GetCommon().QueryText(text)
		res, _ := json.Marshal(result)
		writer.Write(res)
		return
	}).Methods("GET")
	return nil
}
