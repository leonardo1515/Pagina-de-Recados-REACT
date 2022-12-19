import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreType {
  name: string;
  email: string;
  password: string;
}

const initialState: CreType = {
  name: "",
  email: "",
  password: "",
};

const NewUserSlace = createSlice({
  name: "creatNewUserSlace",
  initialState,
  reducers: {
    newUser(state, action: PayloadAction<CreType>) {
      state = action.payload;
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      const data: any[] = [];
      const dataUsers = {
        name: state.name,
        email: state.email,
        passwoed: state.password,
        messags: data,
      };

      users.push(dataUsers);
      localStorage.setItem("users", JSON.stringify(users));
      console.log("oi");
    },
  },
});

export const { newUser } = NewUserSlace.actions;
export default NewUserSlace.reducer;
