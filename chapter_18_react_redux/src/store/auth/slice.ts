import {createSlice} from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean
}

const initialState: AuthState = {
    isAuthenticated: false
}

export const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

export const authActions = authSlice.actions