import { combineReducers } from "@reduxjs/toolkit";
import LoginSlace from "./CreateeeSlace";
import MessagsSlice from "./MessagsSlace";
import EditSlace from "./EditSlace";
import GetStorageSlice from "./GetLocalstorageSlace";
import CreateSlace from "./CreateeeSlace";
import NewUserSlace from "./CreatSlace";
import Alerts from "./AlerSlace";

export default combineReducers({
  LoginSlace,
  MessagsSlice,
  EditSlace,
  GetStorageSlice,
  CreateSlace,
  NewUserSlace,
  Alerts,
});
