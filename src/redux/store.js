import { combineReducers, createStore } from 'redux';
import contactsRedux from './contactsRedux/contactsRedux';

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

const rootReducer = combineReducers({
  contacts: contactsRedux,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
