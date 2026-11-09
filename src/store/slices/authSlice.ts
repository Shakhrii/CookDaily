import { User } from "@/types/auth";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '@/store'

export interface AuthState {
  accessToken: string | null,
  refreshToken: string | null,
  user: User | null,
}

const initialState: AuthState = {
  accessToken: '',
  refreshToken: '',
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  }
})

export const accessToken = (state: RootState) => state.auth.accessToken;
export const refreshToken = (state: RootState) => state.auth.refreshToken;
export const user = (state: RootState) => state.auth.user;

export default authSlice.reducer
