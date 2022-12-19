import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MessageType {
  msg: string;
  type: "success" | "error" | "warning" | "";
}

const initialState: MessageType = { msg: "", type: "" };

const Alerts = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage(state, action: PayloadAction<MessageType>) {
      return action.payload;
    },
    clearMessage() {
      return initialState;
    },
  },
});

export const { setMessage, clearMessage } = Alerts.actions;
export default Alerts.reducer;
