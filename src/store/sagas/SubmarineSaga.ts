import { takeLatest } from 'redux-saga/effects';
import { createAction } from 'typesafe-actions';

export const registerSubmarineAction = createAction('submarine/REGISTER')<string>();


function* registerSubmarine({ }: ReturnType<typeof registerSubmarineAction>) {

}

export function* formSaga() {
    yield takeLatest(registerSubmarineAction, registerSubmarine);
}
