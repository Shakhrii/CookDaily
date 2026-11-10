import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit/react";
import { logout, setCredentials } from "./slices/authSlice";
import { RootState } from "./store";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(setCredentials, logout),
  effect: (_action, listenerApi) => {
    const { auth } = listenerApi.getState() as RootState;
    
    try {
      localStorage.setItem('auth', JSON.stringify(auth));
    } catch {}
  }
})