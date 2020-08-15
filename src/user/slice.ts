import { createSlice } from '@reduxjs/toolkit'

export const STORE_KEY = 'user'

export interface UserState {}

const initialState: UserState = {}

export const userSlice = createSlice({
  reducers: {},
  initialState,
  name: STORE_KEY,
})
