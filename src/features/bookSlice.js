import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, name: "One", page: 200, price: 20.99, userId: 1 },
    { id: 2, name: "Two", page: 150, price: 15.49, userId: 2 },
    { id: 3, name: "Three", page: 300, price: 25.99, userId: 3 },
    { id: 4, name: "Four", page: 180, price: 18.79, userId: 4 },
    { id: 5, name: "Five", page: 250, price: 22.99, userId: 5 },
  ],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    delBook(state, action) {
      state.books = state.books.filter((el) => el.id !== +action.payload);
    },
    addBook(state, action) {
      state.books.push(action.payload);
    },
    delBookByAuthor(state, action) {
      state.books = state.books.filter((elm) => elm.userId != action.payload);
    },
  },
});

export default bookSlice.reducer;
export const { delBook, addBook, delBookByAuthor } = bookSlice.actions;
