import { createStore, Store } from 'redux';
import { BoardState } from './modules/board/types';

import rootReducer from './modules/rootReducer';

export interface ApplicationState {
  board: BoardState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
