'use client'
import React from 'react'
import { Grid,Box,Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Stack ,IconButton, Tooltip} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';


export default function FormTwo() {
  return (
    
  
    <Grid container spacing={2} direction="column">
      <Grid item xs={12} sm={12} md={12}>
           
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label"  sx={{color:"#333333"}}>Do You Have Voter ID In Telangana?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio  
                   sx={{
                    color: '#C9C6C6', 
                    '&.Mui-checked': {
                      color: '#FF0000',
                    },
                  }} />} label="Yes" />
        <FormControlLabel value="no" control={<Radio  
                sx={{
                    color: '#C9C6C6', 
                    '&.Mui-checked': {
                    color: '#FF0000',
                    },
                  }} />} label="No" />
      
      </RadioGroup>
    </FormControl>
  </Grid>
   
  <Grid item xs={12} sm={12} md={12}>
           
           <FormControl>
           <FormLabel id="demo-row-radio-buttons-group-label"  sx={{color:"#333333" }}>Do You Have Voter ID In Telangana?</FormLabel>
           <RadioGroup
             row
             aria-labelledby="demo-row-radio-buttons-group-label"
             name="row-radio-buttons-group"
           >
             <FormControlLabel value="yes" control={<Radio 
                sx={{
                  color: '#C9C6C6', 
                  '&.Mui-checked': {
                    color: '#FF0000',
                  },
                }}
             
             />} label="Yes" />
             <FormControlLabel value="no" control={<Radio 
               sx={{
                color: '#C9C6C6', 
                '&.Mui-checked': {
                  color: '#FF0000',
                },
              }}
             
             />} label="No" />
           
           </RadioGroup>
         </FormControl>
       </Grid>
  

    </Grid>



 )
}
