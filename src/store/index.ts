import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';
import { IUser } from './modules/user/types';

export interface IState {
  user: IUser;
}

const store = createStore(rootReducer);

export default store;
