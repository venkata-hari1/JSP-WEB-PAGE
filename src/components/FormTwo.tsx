'use client'
import React, { Fragment } from 'react'
import { Grid, Box, Typography, TextField, InputAdornment, Button } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useTranslation } from 'react-i18next';
import { useStyles } from './MakeStyles/Style';
import { FormGrid, FormLabelText, RadioButtonText, RootContainer, SmallText } from './ReusableStyles/Styles';
import Select from './Select';
import { setValue } from './Redux/Reducers/Language';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './Redux/Store/store';
import Childtwo from './Childtwo';
export default function FormTwo() {
  const { t, i18n } = useTranslation();
  const { classes }: any = useStyles();
  const dispatch=useDispatch<AppDispatch>()
  const handleBack=()=>{
    dispatch(setValue(true))
  }
  return (
    <RootContainer>
    <Grid container sx={{ width: '93%' }} mt={16}>
      <Typography variant='h6' sx={{ display: "flex", justifyContent: "flexStart", color: "#FF0000", textDecoration: "underline" }}>{t('maintitle')}</Typography>
      <Grid size={{ xs: 12, md: 12, lg: 12 }} >
        <Box display="flex" flexDirection="row">
          <FormControl>
            <SmallText>{t('voter.voterlabel')}</SmallText>
            <RadioGroup row

              name="radio-buttons-group">
              {(t('voter.status', { returnObjects: true }) as Array<{ value: string }>)?.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option.value}
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#C9C6C6",
                        '&.Mui-checked': {
                          color: "#FF0000",
                        },
                      }}
                    />
                  }
                  label={<RadioButtonText>{option.value}</RadioButtonText>}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 12, lg: 12 }} >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <FormControl>
            <SmallText>{t('janasenamember.memberlabel')}</SmallText>
            <RadioGroup row

              name="radio-buttons-group">
              {(t('janasenamember.option', { returnObjects: true }) as Array<{ value: string }>)?.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option.value}
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#C9C6C6",
                        '&.Mui-checked': {
                          color: "#FF0000",
                        },
                        fontSize: 14,
                      }}
                    />
                  }
                  label={<RadioButtonText>{option.value}</RadioButtonText>}
                />
              ))}

            </RadioGroup>
          </FormControl>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 12, lg: 12 }}>
        <FormGrid>
        <Box>
          <FormLabelText>{t('HNO')} <Typography component="span" color='red'>*</Typography></FormLabelText>
          <TextField placeholder={t('hplaceholder')}
            fullWidth
  
            classes={{ root: classes.textfield }}
            InputProps={{
              classes: {
                notchedOutline: classes.outlineBorder,
              },
              startAdornment: (
                <InputAdornment position='start'>
                  {/* <PermIdentityIcon sx={{ fontSize: '20px',color:'red' }} /> */}
                </InputAdornment>
              )
            }}
          />
        </Box>
        <ErrorOutlineIcon sx={{ marginTop: '35px',color:'#889095' }} />
        </FormGrid>
        <Select/>
     
      </Grid>
      <Childtwo />
    </Grid>

    </RootContainer>
  )
}
