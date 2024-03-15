import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authors: [
    { id: 1, name: "John", surname: "Doe", age: 30, username: "john_doe" },
    { id: 2, name: "Jane", surname: "Smith", age: 25, username: "jane_smith" },
    {
      id: 3,
      name: "Bob",
      surname: "Johnson",
      age: 28,
      username: "bob_johnson",
    },
    {
      id: 4,
      name: "Alice",
      surname: "Williams",
      age: 22,
      username: "alice_williams",
    },
    {
      id: 5,
      name: "Charlie",
      surname: "Brown",
      age: 35,
      username: "charlie_brown",
    },
  ],
};

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    delAuthor(state, action) {
      state.authors = state.authors.filter((el) => el.id !== +action.payload);
    },
    addAuthor(state, action) {
      state.authors.push(action.payload);
    },
  },
});

export default authorSlice.reducer;
export const { delAuthor,addAuthor } = authorSlice.actions;
