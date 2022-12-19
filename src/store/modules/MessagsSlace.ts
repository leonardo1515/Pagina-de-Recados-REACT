import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginType {
  id: number;
  messag: string;
  descript: string;
}

const initialState: loginType = {
  id: 0,
  messag: "",
  descript: "",
};

const MessagsSlice = createSlice({
  name: "MessagsSlice",
  initialState,
  reducers: {
    creaatNewMessag(state, action: PayloadAction<loginType>) {
      state = action.payload;
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userLogged = sessionStorage.getItem("logged");
      const currentLogged = users.find((user: { email: string | null }) => {
        return user.email === userLogged;
      });

      const newMessag = {
        id: state.id,
        messag: state.messag,
        descript: state.descript,
      };

      currentLogged.messags.push(newMessag);
      users.forEach((user: { email: string | null; messags: [] }) => {
        if (user.email === userLogged) {
          user.messags = currentLogged.messags;
        }
      });

      localStorage.setItem("users", JSON.stringify(users));
    },
    deletMessag(state, action: PayloadAction<loginType>) {
      state = action.payload;
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userLogged = sessionStorage.getItem("logged");
      const currentLogged = users.find((user: { email: string | null }) => {
        return user.email === userLogged;
      });
      let idx = currentLogged.messags.findIndex(
        (linha: { id: number }) => linha.id === state.id
      );

      if (idx >= 0) {
        currentLogged.messags.splice(idx, 1);
      }

      users.forEach((item: { email: string | null; messags: [] }) => {
        if (item.email === userLogged) {
          item.messags = currentLogged.messags;
        }
      });
      localStorage.setItem("users", JSON.stringify(users));
    },
  },
});

export const { creaatNewMessag, deletMessag } = MessagsSlice.actions;
export default MessagsSlice.reducer;
