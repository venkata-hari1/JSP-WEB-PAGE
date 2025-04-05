import { Grid,Box, FormLabel, Typography, ButtonGroup, Stack, } from '@mui/material'
import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FormGrid, FormLabelText, RadioButtonText, SmallText } from './ReusableStyles/Styles';
import Select from './Select';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';

const Childtwo = () => {
  return (
   <Grid container  direction="column" spacing={2}>
   <Grid  size={{ xs: 12, md: 12, lg: 12 }}>
   <Box display="flex" flexDirection="row">
   <FormControl>
  <SmallText>Employment Status<Typography component='span' color='red'>*</Typography></SmallText>
  <RadioGroup row
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    >
    <Box display="flex" flexDirection="column">     
    <FormControlLabel value="Private Sector" control={<Radio size='small'sx={{   
                        color: "#C9C6C6",
                        '&.Mui-checked': {
                          color: "#FF0000",
                          fontSize:"12px"
                        },}} />} label="Private Sector" />

    <FormControlLabel value="Public Sector" control={<Radio size='small' sx={{   
                        color: "#C9C6C6",
                        '&.Mui-checked': {
                          color: "#FF0000",
                          fontSize:"14px"
                        },}}/>} label="Public Sector" />
       </Box>                 
       <Box display="flex" flexDirection="column">                 
       <FormControlLabel value="Self Employeed" control={<Radio size='small' sx={{   
                        color: "#C9C6C6",
                        '&.Mui-checked': {
                          color: "#FF0000",
                         
                        },}}/>} label="Self Employeed" />
        <FormControlLabel value="Unemployed" control={<Radio size='small' sx={{   
                        color: "#C9C6C6",
                        '&.Mui-checked': {
                          color: "#FF0000",
                          fontSize:"14px"
                        },}}/>} label="Unemployed" />
      </Box>
  </RadioGroup>

  
  </FormControl>


   </Box>
   </Grid>

   <Grid  size={{ xs: 12, md: 12, lg: 12 }}>
   <Box display="flex" flexDirection="row">
   <FormControl>
  <SmallText>Education<Typography component='span' color='red'>*</Typography><ErrorOutlineIcon sx={{ marginTop:"10px",color:'#889095' }} /></SmallText> 
  
  <RadioGroup row
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    >
    <Box display="flex" flexDirection="column">     
    <FormControlLabel value="10th Class" control={<Radio size='small'sx={{   
                        color: "#C9C6C6",
                        '&.Mui-checked': {
                          color: "#FF0000",
                          fontSize:"12px"
                        },}} />} label="10th Class" />

    <FormControlLabel value="Intermediate" control={<Radio size='small' sx={{   
                        color: "#C9C6C6",
                        '&.Mui-checked': {
                          color: "#FF0000",
                          fontSize:"14px"
                        },}}/>} label="Intermediate" />
       </Box>                 
       <Box display="flex" flexDirection="column">                 
       <FormControlLabel value="Graduation" control={<Radio size='small' sx={{   
                        color: "#C9C6C6",
                        '&.Mui-checked': {
                          color: "#FF0000",
                         
                        },}}/>} label="Graduation" />
        <FormControlLabel value="Postgraduation & Above" control={<Radio size='small' sx={{   
                        color: "#C9C6C6",
                        '&.Mui-checked': {
                          color: "#FF0000",
                          fontSize:"14px"
                        },}}/>} label="Postgraduation & Above" />
      </Box>
  </RadioGroup>
</FormControl>
</Box>
   </Grid>

  <Grid>
    <Stack display="flex" flexDirection="row" >
    <SmallText>Total Members In The Family<Typography component='span' color='red'>* </Typography>
    <Box component="br" />
    Including you
    </SmallText> <ErrorOutlineIcon sx={{ color:'#889095' }} />
    
    <ButtonGroup size="small" aria-label="Small button group" sx={{marginLeft:"30px"}}> 
    <Stack direction="row" spacing={2}>
    <Button variant="contained"  sx={{backgroundColor:"#BBB9B9"}}>-</Button>
      <Box>1</Box> 
    <Button variant="contained" sx={{backgroundColor:"#BBB9B9"}}>+</Button>
    </Stack>
    </ButtonGroup>
    </Stack>
  </Grid>

  <Grid>
  <SmallText>How Many Adults Above (18+ Years)?<Typography component='span' color='red'>*</Typography></SmallText>
  
  <Stack direction="row" spacing={2}>
  <ButtonGroup size="small" aria-label="Small button group"  >
      <Stack direction="row">
      <Button variant="outlined"  startIcon={<PersonIcon />}>
        Men
        
      </Button>
      
      </Stack>
      <Stack  direction="row">
    <Button variant="outlined" startIcon={<PersonIcon />} >
        Women
      </Button>
      
      </Stack>  
      </ButtonGroup>
      <ErrorOutlineIcon sx={{ marginTop: '35px',color:'#889095' }} />
    </Stack>
  </Grid>
   
  <Grid>
  <SmallText>How Many Future Voters (7 - 17 Years)*<Typography component='span' color='red'>*</Typography>
  </SmallText>
  
  <Stack direction="row" spacing={2}>
  <ButtonGroup size="small" aria-label="Small button group"  >
      <Stack direction="row">
      <Button variant="outlined"  startIcon={<PersonIcon />}>
        Boys
        
      </Button>
      
      </Stack>
      <Stack  direction="row">
    <Button variant="outlined" startIcon={<PersonIcon />} >
      Girls
      </Button>
      
      </Stack>  
      </ButtonGroup>
      <ErrorOutlineIcon sx={{ marginTop: '35px',color:'#889095' }} />
    </Stack>
  </Grid>


   </Grid>

  )
}

export default Childtwo