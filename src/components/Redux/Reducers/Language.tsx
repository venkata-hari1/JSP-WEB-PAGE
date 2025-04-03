'use client';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Data from '../../../utils/locales/english.json'
const initialState = {
  loading: false,
  data:Data,
  reports:[],
}
export const Language_Slice = createSlice({
  name: "LanguageSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  }
})
export default Language_Slice.reducer