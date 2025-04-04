'use client'
import React from 'react'
import { Grid,Box, Icon, IconButton, Typography, TextField, OutlinedInput, InputLabel, } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function FormTwo() {
  return (
    <Grid container spacing={2} direction="column">
     <Typography variant='h6' sx={{display:"flex",justifyContent:"flexStart",color:"#FF0000",textDecoration:"underline"}}>GAME CHANGER OF TELANGANA</Typography>  
    <Grid item >
    <Box direction="row"> 
    <FormControl>
      <FormLabel sx={{color:"#333333",fontSize:14}}>Do You Have Voter ID In Telangana?</FormLabel>
      <RadioGroup  row
        
        name="radio-buttons-group">
        <FormControlLabel value="yes" control={<Radio size="small"
        
        sx={{ color:"#C9C6C6",
              '&.Mui-checked': {
                color:"#FF0000",
              }}}
        
        />} label="Yes" />
       
        <FormControlLabel value="no" control={<Radio  size="small" 
          sx={{ color:"#C9C6C6",
            '&.Mui-checked': {
              color:"#FF0000",
            },fontSize:14 }}

        
        />} label="No" />
        </RadioGroup>
    </FormControl>
    </Box>
    

    </Grid>
    
    <Grid item >
    <Box direction="row"> 
    <FormControl>
      <FormLabel sx={{color:"#333333", fontSize:14}}>Are You a Member Of Janasena?</FormLabel>
      <RadioGroup  row
        
        name="radio-buttons-group">
        <FormControlLabel value="yes" control={<Radio size="small"
        
        sx={{ color:"#C9C6C6",
              '&.Mui-checked': {
                color:"#FF0000",

              },fontSize:14}}
        
        />} label="Yes" />
        <FormControlLabel value="no" control={<Radio  size="small" 
          sx={{ color:"#C9C6C6",
            '&.Mui-checked': {
              color:"#FF0000",
            } }}

        
        />} label="No" />
        </RadioGroup>
    </FormControl>
    </Box>
    </Grid>

    <Grid item >
    <Box > 
    <FormLabel>House/No<Typography component="span" color='red'></Typography></FormLabel> 
    <TextField fullWidth size="small" sx={{width:"90%"}} />
    </Box>    
    </Grid>

   
    </Grid>
  )
}
