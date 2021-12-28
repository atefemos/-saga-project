import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

function getApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {},
  });
}
