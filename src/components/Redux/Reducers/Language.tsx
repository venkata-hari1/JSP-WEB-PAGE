import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type IState={
  value:boolean,
  open:boolean,
  scroll:string,
  isMobileValid:boolean, 
  form:{
    name:string,
    mobile:number | null,
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
    }
   
  },
});

export const { setValue,setFormData,setOpen,setScroll, setIsMobileValid} = Language_Slice.actions;
export default Language_Slice.reducer;