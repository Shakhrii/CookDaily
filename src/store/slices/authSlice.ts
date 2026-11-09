import type { LoginResponse, User } from "@/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '@/store'

export interface AuthState {
  accessToken: string | null,
  refreshToken: string | null,
  user: User | null,
}

const emptyState =  {
      accessToken: null,
      refreshToken: null,
      user: null,
    };

function loadAuthState(): AuthState {
  try {
    const authStr = localStorage.getItem('auth');
    const authState =  authStr ? JSON.parse(authStr) : emptyState;
    return authState;
  } catch {
    return emptyState;
  } 
}

const initialState: AuthState = loadAuthState();

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<LoginResponse>) => {
      const { accessToken, refreshToken, ...user } = action.payload;

      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user = user;
    },
    logout: state => emptyState,
  }
})

export const { setCredentials, logout } = authSlice.actions;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;
export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => !!state.auth.accessToken; 

export default authSlice.reducer;
