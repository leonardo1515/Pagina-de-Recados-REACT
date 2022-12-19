import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginType {
  email: string;
  password: string;
  erro?: number;
}

const initialState: loginType = {
  email: "",
  password: "",
  erro: 0,
};

const LoginSlace = createSlice({
  name: "LoginSlace",
  initialState,
  reducers: {
    enterApp(state, action: PayloadAction<loginType>) {
      state = action.payload;

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userCurrent = users.find(
        (use: { email: any }) => use.email === state.email
      );

      if (!userCurrent || userCurrent === undefined) {
        alert("Este email não está vinculálo a uma conta");
        state.erro = 2;
        return;
      }
      if (
        state.email !== userCurrent.email ||
        state.password !== userCurrent.passwoed
      ) {
        alert("Email ou senha errado.");
        return;
      }
      state.erro = 0;
      return action.payload;
    },
  },
});

export const { enterApp } = LoginSlace.actions;
export default LoginSlace.reducer;
