import { createSlice } from "@reduxjs/toolkit";

interface GetStoragType {
  allUsers: [];
  emailLogged: string | null;
  currentLogged: [];
  name: "";
  messags: [];
}

const initialState: GetStoragType = {
  allUsers: [],
  emailLogged: "" || null,
  currentLogged: [],
  name: "",
  messags: [],
};

const GetStorageSlice = createSlice({
  name: "GetStorage",
  initialState,
  reducers: {
    getLocalStorage(state) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userLogged = sessionStorage.getItem("logged");
      const currentLogged = users.find((user: { email: string | null }) => {
        return user.email === userLogged;
      });
      state.allUsers = users;
      state.emailLogged = userLogged || null;
      state.currentLogged = currentLogged;
      state.name = currentLogged.name;
      state.messags = currentLogged.messags;
    },
  },
});

export const { getLocalStorage } = GetStorageSlice.actions;
export default GetStorageSlice.reducer;
