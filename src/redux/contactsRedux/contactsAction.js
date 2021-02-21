import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from './contactsTypes';

const addContact = arr => {
  return {
    type: ADD_CONTACT,
    payload: {
      arr,
    },
  };
};

const deleteContact = item => {
  return {
    type: DELETE_CONTACT,
    payload: {
      item,
    },
  };
};

const changeFilter = query => {
  return {
    type: CHANGE_FILTER,
    payload: {
      query,
    },
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
