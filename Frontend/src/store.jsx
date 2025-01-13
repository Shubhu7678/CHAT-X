
import authReducer from "./slices/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profileSlice";
import userReducer from "./slices/userSlice";

import conversationReducer from "./slices/conversationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    user: userReducer,
    conversation : conversationReducer

  }
})