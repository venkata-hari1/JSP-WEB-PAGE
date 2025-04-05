import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type IState={
  value:boolean,
  open:boolean,
  scroll:string,
  isMobileValid:boolean, 
  form:{
    name:string,
    mobile:number | null,
    adults:{
      male:number,
      female:number
    },
    voterid:string,
    janasenamember:string,
    houseno:string,
    district:string,
    constituency:string,
    divison:string,
    villagearea:string,
    pincode:string,
    employeementstatus:string,
    education:string
  }
}
const initialState:IState = {
  value: true,
  open:false,
  isMobileValid: false, 
  scroll:'',
  form:{
    name:'',
    mobile:null,
    voterid:'',
    janasenamember:'',
    houseno:'',
    district:'',
    constituency:'',
    adults:{
      male:0,
      female:0
    },
    divison:'',
    villagearea:'',
    pincode:'',
    employeementstatus:'',
    education:''
  }
};

export const Language_Slice = createSlice({
  name: "LanguageSlice",
  initialState,
  reducers: {
 
    setValue:(state,action)=>{
      state.value=action.payload
    },
    setFormData: (state, action) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    setOpen:(state,action)=>{
      state.open=action.payload
    },
    setScroll:(state,action)=>{
      state.scroll=action.payload
    },
    setIsMobileValid: (state, action: PayloadAction<boolean>) => {
      state.isMobileValid = action.payload;
    },
    incrementAdult: (state, action: PayloadAction<'male' | 'female'>) => {
      state.form.adults[action.payload]++;
    },
    
    decrementAdult: (state, action: PayloadAction<'male' | 'female'>) => {
      if (state.form.adults[action.payload] > 0) {
        state.form.adults[action.payload]--;
      }
    },
   
  },
});

export const { setValue,setFormData,setOpen,setScroll, setIsMobileValid,incrementAdult, decrementAdult} = Language_Slice.actions;
export default Language_Slice.reducer;