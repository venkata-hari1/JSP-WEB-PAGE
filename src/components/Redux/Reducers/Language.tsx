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
  value:boolean,
  data:React_Type,
}
const initialState:IState = {
  value: true,
  data: English, 
};

export const Language_Slice = createSlice({
  name: "LanguageSlice",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.data = languages[action.payload] || English;
   
    },
    setValue:(state,action)=>{
      state.value=action.payload
    }
   
  },
});

export const { setLanguage,setValue} = Language_Slice.actions;
export default Language_Slice.reducer;