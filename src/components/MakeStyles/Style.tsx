import { makeStyles } from 'tss-react/mui';
export const useStyles = makeStyles()((theme) => ({
  radioChecked: {
    '&.Mui-checked': {
      color: '#FF0000',
    },
  },
  textfield:{
    "& input": {
      height: "3.6vh !important",
      fontSize:'14px !important'
    },
  },
  outlineBorder: {
    borderColor: '#889095 !important',
    borderRadius:'8px !important',
  },
  selecttextfield: {
    "& label": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "95%",
  },
    "& .MuiInputBase-root": {
      height: "5.5vh !important",
      fontSize: '14px !important',
    },
  },
  selectoutlineBorder: {
    borderColor: '#889095 !important',
    borderRadius: '8px !important',
  },
  stepper:{
    '& .MuiStepContent-root': { paddingLeft: 0, borderLeft: 'none' }
  },
  nextbtn:{
    marginRight:'60px !important',
    marginTop:'20px !important',
    width:'25% !important',
    padding:'8px 0 !important',
    fontWeight:'500 !important',
    textTransform:'capitalize !important' as 'capitalize',
    color:'#FF0000 !important',
    fontSize:'15px !important',
    borderRadius:'11px !important',
   border:'1px solid #FF0000 !important',
   [theme.breakpoints.down('md')]:{
    marginRight:'30px !important',
    width:'30% !important'
   },
   [theme.breakpoints.down('xs')]:{
    marginRight:'30px !important',
    width:'30% !important'
   }
  },
  backbtn:{
    marginRight:'10px !important',
    marginTop:'20px !important',
    width:'25% !important',
    padding:'8px 0 !important',
    fontWeight:'500 !important',
    textTransform:'capitalize !important' as 'capitalize',
    color:'rgb(0, 26, 255) !important',
    fontSize:'15px !important',
    borderRadius:'11px !important',
   border:'1px solid rgb(0, 26, 255) !important',
   [theme.breakpoints.down('md')]:{
    marginRight:'10px !important',
    width:'30% !important'
   },
   [theme.breakpoints.down('xs')]:{
    marginRight:'10px !important',
    width:'30% !important'
   }
  },
  btncontainer:{
  display: 'flex !important',
  justifyContent:'flex-end !important' as 'column'
    // display:'flex',
    // gridTemplateColumns:'repe at(2,1fr)'
  },
 
}))