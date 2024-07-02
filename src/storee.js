import { createStore } from 'redux';

import rootReducer from './views/reducers'; // Pastikan mengimpor reducer Anda

const store = createStore(rootReducer);

export default store;
