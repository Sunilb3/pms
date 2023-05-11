import { createStore } from 'redux';
import usersReducer from './userReducer';

const store = createStore(usersReducer);

export default store;