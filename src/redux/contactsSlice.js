import { createSlice } from '@reduxjs/toolkit';

const initialState = () => {
  if (localStorage.getItem('contacts')) {
    return {
      'items': JSON.parse(localStorage.getItem('contacts')),
      'filter': ''
    };
  } else return {
    'items': [],
      'filter': ''
  }
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
})

export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
