import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError } from './personalHomepageSlice';
import { getRepositories } from './personalHomepageAPI';


const loadingDelay = 2_000;

function* fetchRepositoriesHandler({ payload: username }) {
    try {
        yield delay(loadingDelay);
        const repositories = yield call(getRepositories, username);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
}

export default function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}