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
    <Grid container direction="column" mt={2} sx={{width:'100%'}}>
      <FormControl fullWidth>
        <SmallText>{t('employment.employmentlabel')}<Typography component='span' color='red'>*</Typography></SmallText>
        <RadioGroup row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <RadioBoxGrid>
            {(t('employment.employmentstatus', { returnObjects: true }) as Array<{ sector: string }>).map((option, index) => (
              <FormControlLabel key={index} value={option.sector} control={<Radio size='small' sx={{
                color: "#C9C6C6",
                '&.Mui-checked': {
                  color: "#FF0000",
                  fontSize: "14px"
                },
              }} />} label={<RadioButtonText>{option.sector}</RadioButtonText>} />))}
          </RadioBoxGrid>

        </RadioGroup>


      </FormControl>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <SmallText>{t('education.educationlabel')}<Typography component='span' color='red'>*</Typography></SmallText>
        <RadioGroup row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
           <RadioBoxGrid>
            {(t('education.educationstatus', { returnObjects: true }) as Array<{ class: string }>).map((option, index) => (
              <FormControlLabel key={index} value={option.class} control={<Radio size='small' sx={{
                color: "#C9C6C6",
                '&.Mui-checked': {
                  color: "#FF0000",
                  fontSize: "14px"
                },
              }} />} label={<RadioButtonText>{option.class}</RadioButtonText>} />))}
          </RadioBoxGrid>
        </RadioGroup>
      </FormControl>
      <Stack display="flex" flexDirection="row" sx={{ mt: 2 }}>
        <SmallText>{t('familymembers.familymemberlabel')}<Typography component='span' color='red'>*</Typography>
          <Box component="br" />
          {t('familymembers.withyou')}
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