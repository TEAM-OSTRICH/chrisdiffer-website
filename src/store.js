import { createStore } from 'redux';
import reducers from './client/reducers/modalReducer';

const store = createStore(
  reducers,
);

export default store;
