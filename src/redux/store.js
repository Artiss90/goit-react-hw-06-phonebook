import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import contactsRedux from './contactsRedux/contactsRedux';

const persistConfig = {
  key: 'listContacts',
  storage,
  whitelist: ['items'],
};

const store = configureStore({
  reducer: { contacts: persistReducer(persistConfig, contactsRedux) },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

const persiststore = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persiststore };
