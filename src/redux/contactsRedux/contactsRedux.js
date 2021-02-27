import { combineReducers } from 'redux';
import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from './contactsTypes';

const itemsRedux = (items = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT: {
      /**проверка на повторение имён */
      if (items.find(contactName => contactName.name === payload.name)) {
        console.log(`${payload.name} is already in contacts!`);
        return items;
      }
      /**добавляем новый контакт в в состояние контактов */
      return [...items, payload];
    }

    case DELETE_CONTACT: {
      /**оставляем отфильтрованные контакты, у которых не совпал id */
      return items.filter(contact => contact.id !== payload);
    }

    default:
      return items;
  }
};
const filterRedux = (filter = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER: {
      return payload;
    }

    default:
      return filter;
  }
};

export default combineReducers({
  items: itemsRedux,
  filter: filterRedux,
});
