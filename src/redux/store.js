import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';

const addContact = createAction('contacts/addContact');
const deleteContact = createAction('contacts/deleteContact');
const changeFilter = createAction('contacts/changeFilter');
const initialState = {
  'items': [],
  'filter': ''
};

export const contactsReducer = createReducer(initialState, (builder) => {
  builder.addCase(addContact, (state, action) => state.contacts.items.push({'id': nanoid(), 'name': action.payload.name, 'number': action.payload.number}))
  builder.addCase(deleteContact, (state, action) => ({...state, 'items': state.contacts.items.filter(item => item.id !== action.payload)}))
  builder.addCase(changeFilter, (state, action) => ({ ...state, 'filter': action.payload }))
})


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  }
});

export { addContact, deleteContact, changeFilter };
