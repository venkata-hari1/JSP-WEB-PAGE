import { Grid, Box, FormLabel, Typography, ButtonGroup, Stack, } from '@mui/material'
import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FormGrid, FormLabelText, RadioBoxGrid, RadioButtonText, SmallText } from './ReusableStyles/Styles';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import { useTranslation } from 'react-i18next';

const Childtwo = () => {
    const { t, i18n } = useTranslation();
  return (
    <Grid container direction="column" spacing={2}>
 
 <FormControl fullWidth>
            <SmallText>{t('employment.employmentlabel')}<Typography component='span' color='red'>*</Typography></SmallText>
            <RadioGroup row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <RadioBoxGrid>
             {(t('employment.employmentstatus',{returnObjects:true}) as Array<{sector:string}>).map((option, index) => (
                  <FormControlLabel key={index}  value={option.sector} control={<Radio size='small' sx={{
                  color: "#C9C6C6",
                  '&.Mui-checked': {
                    color: "#FF0000",
                    fontSize: "14px"
                  },
                }} />} label={<RadioButtonText>{option.sector}</RadioButtonText>} />))}
              </RadioBoxGrid>
            
            </RadioGroup>


          </FormControl>
          <FormControl>
            <SmallText>Education<Typography component='span' color='red'>*</Typography></SmallText>
            <RadioGroup row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <Box display="flex" flexDirection="column">
                <FormControlLabel value="10th Class" control={<Radio size='small' sx={{
                  color: "#C9C6C6",
                  '&.Mui-checked': {
                    color: "#FF0000",
                    fontSize: "12px"
                  },
                }} />} label="10th Class" />

                <FormControlLabel value="Intermediate" control={<Radio size='small' sx={{
                  color: "#C9C6C6",
                  '&.Mui-checked': {
                    color: "#FF0000",
                    fontSize: "14px"
                  },
                }} />} label="Intermediate" />
              </Box>
              <Box display="flex" flexDirection="column">
                <FormControlLabel value="Graduation" control={<Radio size='small' sx={{
                  color: "#C9C6C6",
                  '&.Mui-checked': {
                    color: "#FF0000",

                  },
                }} />} label="Graduation" />
                <FormControlLabel value="Postgraduation & Above" control={<Radio size='small' sx={{
                  color: "#C9C6C6",
                  '&.Mui-checked': {
                    color: "#FF0000",
                    fontSize: "14px"
                  },
                }} />} label="Postgraduation & Above" />
              </Box>
            </RadioGroup>
          </FormControl>
          <Stack display="flex" flexDirection="row" >
          <SmallText>Total Members In The Family<Typography component='span' color='red'>*</Typography>
            <Box component="br" />
            Including you
          </SmallText>

          <ButtonGroup size="small" aria-label="Small button group" sx={{ marginLeft: "30px" }}>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" sx={{ backgroundColor: "#BBB9B9" }}>-</Button>
              <Box>1</Box>
              <Button variant="contained" sx={{ backgroundColor: "#BBB9B9" }}>+</Button>
            </Stack>
          </ButtonGroup>
        </Stack>
 

    

      <Box>
        <SmallText>How Many Adults Above (18+ Years)?<Typography component='span' color='red'>*</Typography></SmallText>

        <Stack direction="row" spacing={2}>
          <ButtonGroup size="small" aria-label="Small button group"  >
            <Stack direction="row">
              <Button variant="outlined" startIcon={<PersonIcon />}>
                Men

              </Button>

            </Stack>
            <Stack direction="row">
              <Button variant="outlined" startIcon={<PersonIcon />} >
                Women
              </Button>

            </Stack>
          </ButtonGroup>
        </Stack>
      </Box>
    </Grid>

  )
}

export default Childtwo