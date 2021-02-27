import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import { combineReducers } from 'redux';
import contactsRedux from './contactsRedux/contactsRedux';

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

// const rootReducer = combineReducers({
//   contacts: contactsRedux,
// });

const store = configureStore({
  reducer: { contacts: contactsRedux },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

export default store;
