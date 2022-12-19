import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginType {
  name: string;
  email: string;
  password: string;
}

const initialState: loginType = {
  name: "",
  email: "",
  password: "",
};

const CreateSlace = createSlice({
  name: "creatSlace",
  initialState,
  reducers: {
    creaatNewUser(state, action: PayloadAction<loginType>) {
      state = action.payload;
      // const users = JSON.parse(localStorage.getItem("users") || "[]");
      // const data: any[] = [];
      // const dataUsers = {
      //   name: state.name,
      //   email: state.email,
      //   passwoed: state.password,
      //   messags: data,
      // };

      // users.push(dataUsers);
      // localStorage.setItem("users", JSON.stringify(users));
      console.log("heloo word");
      // return;
    },
    clear(state) {
      return initialState;
    },
  },
});

export const { creaatNewUser, clear } = CreateSlace.actions;
export default CreateSlace.reducer;
