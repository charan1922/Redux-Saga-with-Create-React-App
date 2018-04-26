import { call, put,  takeLatest } from "redux-saga/effects";

import { fetchData } from "./api";
import { REQUEST_API_DATA, receiveApiData } from "./actions";
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (err) {
    console.log(err);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
