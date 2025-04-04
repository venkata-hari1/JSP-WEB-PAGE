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
    },
  },
  outlineBorder: {
    borderColor: '#889095 !important',
    borderRadius:'8px !important',
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
  btncontainer:{
  display: 'flex !important',
  justifyContent:'flex-end !important' as 'column'
    // display:'flex',
    // gridTemplateColumns:'repe at(2,1fr)'
  }
}))