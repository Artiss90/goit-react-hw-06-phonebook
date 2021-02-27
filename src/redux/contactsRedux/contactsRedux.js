import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsAction from './contactsAction';
// import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from './contactsTypes';

const itemsRedux = createReducer([], {
  [contactsAction.addContact]: (_, { payload }) => {
    /**проверка на повторение имён */
    if (_.find(contactName => contactName.name === payload.name)) {
      console.log(`${payload.name} is already in contacts!`);
      return _;
    }
    /**добавляем новый контакт в в состояние контактов */
    return [..._, payload];
  },

  [contactsAction.deleteContact]: (_, { payload }) =>
    _.filter(contact => contact.id !== payload),
});
// const itemsRedux = (items = [], { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT: {
//       /**проверка на повторение имён */
//       if (items.find(contactName => contactName.name === payload.name)) {
//         console.log(`${payload.name} is already in contacts!`);
//         return items;
//       }
//       /**добавляем новый контакт в в состояние контактов */
//       return [...items, payload];
//     }

//     case DELETE_CONTACT: {
//       /**оставляем отфильтрованные контакты, у которых не совпал id */
//       return items.filter(contact => contact.id !== payload);
//     }

//     default:
//       return items;
//   }
// };

const filterRedux = createReducer('', {
  [contactsAction.changeFilter]: (_, { payload }) => payload,
});
// const filterRedux = (filter = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER: {
//       return payload;
//     }

//     default:
//       return filter;
//   }
// };

export default combineReducers({
  items: itemsRedux,
  filter: filterRedux,
});
