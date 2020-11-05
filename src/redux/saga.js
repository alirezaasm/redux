import {takeLatest, put, all, call, takeEvery} from 'redux-saga/effects';
import types from "./types";
import axios from "axios";
import {fetcherror, fetchsucsses} from "./action";

export function* fitch() {
    let data = [];
    let err = null;
    // try {
    //     const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
    //     const responseBody = response.json() ;
    //     console.log(responseBody[[0]])
    //     yield put(fetchsucsses(responseBody.records));
    //
    // } catch (e) {
    //     yield put(fetcherror(e));
    //
    //     return;
    // }


    yield  axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            data = response.data;
        })
        .catch(er => {
            }
        )

  yield   put(fetchsucsses(data))

}


export function* start() {

    yield takeLatest(types.request, fitch)
}

export default start

