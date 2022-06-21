import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const addContact = createAction('addContact', function prepare({ name, number }) {
  return {
    payload: {
      'id': nanoid(),
      name,
      number
    },
  }
});
const deleteContact = createAction('deleteContact');
const changeFilter = createAction('changeFilter');
const initialState = {
  'items': [],
  'filter': ''
};

export const contactsReducer = createReducer(initialState, (builder) => {
  builder.addCase(addContact.type, (state, action) => {state.items.push(action.payload)})
  builder.addCase(deleteContact.type, (state, action) => ({...state, 'items': state.items.filter(item => item.id !== action.payload)}))
  builder.addCase(changeFilter.type, (state, action) => ({ ...state, 'filter': action.payload }))
})

const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { addContact, deleteContact, changeFilter, store, persistor };

