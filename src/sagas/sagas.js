import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

function fetchBrastlewark() {
  return axios({
    method: "get",
    url: "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
  });
}

function* workerSaga() {
  try {
    const response = yield call(fetchBrastlewark);
    const brastlewark = response.data.Brastlewark;
    yield put({ type: "API_CALL_SUCCESS", brastlewark });
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}