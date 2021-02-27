import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsAction from './contactsAction';

const itemsRedux = createReducer([], {
  [contactsAction.addContact]: (_, { payload }) => {
    /**проверка на повторение имён */
    if (_.find(contactName => contactName.name === payload.name)) {
      console.log(`${payload.name} is already in contacts!`);
      return;
    }
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
