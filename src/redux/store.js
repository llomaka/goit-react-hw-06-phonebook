import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
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


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  }
});

export { addContact, deleteContact, changeFilter };
