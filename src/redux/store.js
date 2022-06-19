import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'

const myReducer = createReducer(0, {});

export const store = configureStore({
  reducer: {
    contacts: {
      items: [],
      filter: ''
    }
  }
});
