import { combineReducers } from 'redux';
import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from './contactsTypes';

const itemsRedux = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT: {
      console.log('add');
      return state;
    }

    case DELETE_CONTACT: {
      console.log('delete');
      return state;
    }

    default:
      return state;
  }
};
const filterRedux = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER: {
      console.log('filter');
      return state;
    }

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsRedux,
  filter: filterRedux,
});
