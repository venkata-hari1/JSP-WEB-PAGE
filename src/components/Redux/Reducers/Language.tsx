import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import English from "../../../utils/locales/english.json";
import Hindi from "../../../utils/locales/hindi.json";
import Telugu from "../../../utils/locales/telugu.json";
import { React_Type } from "@/utils/Types";


const languages: Record<string, any> = {
  English,
  Hindi,
  Telugu,
};
type IState={
  loading:boolean,
  data:React_Type,
}
const initialState:IState = {
  loading: false,
  data: English, 
};

export const Language_Slice = createSlice({
  name: "LanguageSlice",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.data = languages[action.payload] || English;
   
    },
   
  },
});

export const { setLanguage} = Language_Slice.actions;
export default Language_Slice.reducer;