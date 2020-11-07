import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AuthState } from './modules/auth/types';
import { BoardState } from './modules/board/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';

export interface ApplicationState {
  auth: AuthState;
  board: BoardState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
