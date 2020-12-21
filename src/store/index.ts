import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AuthState } from './modules/auth/types';
import { BoardState } from './modules/board/types';
import { LabelState } from './modules/label/types';
import { RepoOwnerState } from './modules/repoOwner/types';
import { RepositoryState } from './modules/repository/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';
import { UiState } from './modules/ui/types';

export interface ApplicationState {
  auth: AuthState;
  repoOwner: RepoOwnerState;
  repository: RepositoryState;
  label: LabelState;
  board: BoardState;
  ui: UiState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
