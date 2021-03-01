import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsAction from './contactsAction';

const itemsRedux = createReducer([], {
  [contactsAction.addContact]: (_, { payload }) => {
    /**добавляем новый контакт в в состояние контактов */
    return [..._, payload];
  },

  [contactsAction.deleteContact]: (_, { payload }) =>
    _.filter(contact => contact.id !== payload),
});

const filterRedux = createReducer('', {
  [contactsAction.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsRedux,
  filter: filterRedux,
});
