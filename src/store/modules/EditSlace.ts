import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditType {
  index: number;
  editMessag: string;
  editMDescript: string;
}

const initialState: EditType = { index: 0, editMessag: "", editMDescript: "" };

const EditSlace = createSlice({
  name: "editSlace",
  initialState,
  reducers: {
    edite(state, action: PayloadAction<EditType>) {
      state = action.payload;
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userLogged = sessionStorage.getItem("logged");
      const currentLogged = users.find((user: { email: string | null }) => {
        return user.email === userLogged;
      });
      console.log(users);
      console.log(userLogged);
      console.log(currentLogged);
      const indexEdite = currentLogged.messags.findIndex(
        (item: any) => item.id === state.index
      );
      console.log(indexEdite);
      console.log(currentLogged.messags[indexEdite].messag);
      console.log(currentLogged.messags[indexEdite].descript);

      currentLogged.messags[indexEdite].messag = state.editMessag;
      currentLogged.messags[indexEdite].descript = state.editMDescript;

      users.forEach((item: { email: string | null; messags: [] }) => {
        if (item.email === userLogged) {
          item.messags = currentLogged.messags;
        }
      });
      localStorage.setItem("users", JSON.stringify(users));
    },
  },
});

export const { edite } = EditSlace.actions;
export default EditSlace.reducer;
