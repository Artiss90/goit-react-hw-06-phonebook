import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from './contactsTypes';

const addContact = createAction(ADD_CONTACT, ({ name, number }) => {
  return {
    payload: {
      /**создаём новый контакт и присвоим ему ID  */
      id: uuidv4(),
      name: name,
      number: number,
    },
  };
});

// const addContact = ({ name, number }) => {
//   return {
//     type: ADD_CONTACT,
//     payload: {
//       /**создаём новый контакт и присвоим ему ID  */
//       id: uuidv4(),
//       name: name,
//       number: number,
//     },
//   };
// };

const deleteContact = createAction(DELETE_CONTACT);

// const deleteContact = id => {
//   return {
//     type: DELETE_CONTACT,
//     payload: { id: id },
//   };
// };

const changeFilter = createAction(CHANGE_FILTER);
// const changeFilter = value => {
//   return {
//     type: CHANGE_FILTER,
//     payload: value,
//   };
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
