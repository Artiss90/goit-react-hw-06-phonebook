import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsRedux from './contactsRedux/contactsRedux';

const store = configureStore({
  reducer: { contacts: contactsRedux },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
