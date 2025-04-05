import { Grid, Box, Typography, TextField, FormControl, RadioGroup, FormControlLabel, Stack, ButtonGroup, Button, IconButton, Radio, } from '@mui/material'
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import PersonIcon from '@mui/icons-material/Person';
import React, { useEffect } from 'react'
import { MiddleText, RadioBoxGrid, RadioBoxGrid1, RadioButtonText, SmallText } from './ReusableStyles/Styles';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './Redux/Store/store';
import { decrementAdult, incrementAdult, setFormData } from './Redux/Reducers/Language';
import ListFields from './ListFields';
import { useStyles } from './MakeStyles/Style';
import { React_Type } from '@/utils/Types';

const Childtwo = () => {
  const { t, i18n } = useTranslation();
  const [adult, setAdult] = React.useState<number>(0)
  const { classes }: React_Type = useStyles();
  const dispatch = useDispatch<AppDispatch>()
  const formState = useSelector((state: RootState) => state.Language.form)
  const handleRadioemploymentStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFormData({
      ...formState,
      employeementstatus: e.target.value
    }));
  };
  const handleRadioeducation = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFormData({
      ...formState,
      education: e.target.value
    }));
  };


  const genderKeyMap: Record<string, 'male' | 'female'> = {
    Male: 'male',
    Female: 'female',
  };

  const handleIncrement = (key: 'male' | 'female') => {
    dispatch(incrementAdult(key));
  };

  const handleDecrement = (key: 'male' | 'female') => {
    dispatch(decrementAdult(key));
  };
  return (
    <Grid container direction="column" mt={2} sx={{ width: '100%' }}>
      <FormControl fullWidth>
        <SmallText>{t('employment.employmentlabel')}<Typography component='span' color='red'>*</Typography></SmallText>
        <RadioGroup row
          aria-labelledby="demo-radio-buttons-group-label"
          onChange={handleRadioemploymentStatus}
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
          onChange={handleRadioeducation}
          name="radio-buttons-group"
        >
          <RadioBoxGrid1>
            {(t('education.educationstatus', { returnObjects: true }) as Array<{ class: string }>).map((option, index) => (
              <FormControlLabel key={index} value={option.class} control={<Radio size='small' sx={{
                color: "#C9C6C6",
                '&.Mui-checked': {
                  color: "#FF0000",
                  fontSize: "14px"
                },
              }} />} label={<RadioButtonText>{option.class}</RadioButtonText>} />))}
          </RadioBoxGrid1>
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




      <Box mt={5}>
        <SmallText>{t('adultsmembers.adultslabel')}<Typography component='span' color='red'>*</Typography></SmallText>


        <Stack direction="row" spacing={2} mt={1}>

          {(t('adultsmembers.genders', { returnObjects: true }) as Array<{ key: 'male' | 'female', gendername: string }>).map((option, index) => (
            <Box
              key={index}
              sx={{
                border: '1px solid #C9C6C6',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                px: 1.5,
                py: 0.5,
                gap: 1,
                bgcolor: 'white',
              }}
            >
              <PersonIcon sx={{ color: 'red' }} />
              <Typography variant="body2" fontWeight={500}>
                {option.gendername}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  borderLeft: '1px solid #C9C6C6',
                  pl: 1,
                }}
              >
                <Typography variant="body2">{formState.adults[option.key]}</Typography>
                <Stack spacing={-1}>
                  <IconButton size="small" sx={{ p: 0.25 }} onClick={() => handleIncrement(option.key)}>
                    <ArrowDropUpRoundedIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ p: 0.25 }} onClick={() => handleDecrement(option.key)}>
                    <ArrowDropDownRoundedIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Box>
            </Box>
          ))}




        </Stack>
      </Box>


      <Box mt={3}>
        <SmallText>{t('futurevoters.futurelabel')}*<Typography component='span' color='red'>*</Typography></SmallText>


        <Stack direction="row" spacing={2}>

          {(t('futurevoters.genders', { returnObjects: true }) as Array<{ gendername: string }>).map((option, index) =>
            <Box
              key={index}
              sx={{
                border: '1px solid #C9C6C6',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                px: 1.5,
                py: 0.5,
                gap: 1,
                bgcolor: 'white',
              }}
            >

              <Typography variant="body2" fontWeight={500}>
                {option.gendername}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  borderLeft: '1px solid #C9C6C6',
                  pl: 1,
                }}
              >
                <Typography variant="body2">1</Typography>
                <Stack spacing={-1}>
                  <IconButton size="small" sx={{ p: 0.25 }}>
                    <ArrowDropUpRoundedIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ p: 0.25 }}>
                    <ArrowDropDownRoundedIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Box>
            </Box>)}
        </Stack>
      </Box>
      <Box sx={{ mt: 3 }}>
        <SmallText sx={{ width: { lg: '70%', xs: '100%', md: '100%' } }}>{t('govtschemes.schemeslabel')}<Typography component='span' color='red'>*</Typography>
          <Typography component={'span'} sx={{ fontSize: '10px' }}>{t('govtschemes.choose')}</Typography>
        </SmallText>

        <ListFields />
      </Box>
      <Box mt={2} >
        <MiddleText sx={{ mb: 1 }}>{t('suggestions.heading')}</MiddleText>
        <SmallText>{t('suggestions.description')}
        </SmallText>
        <TextField
          label="Your Message"
          multiline
          rows={4}
          variant="outlined"
          placeholder={t('suggestions.placedtext')}
          fullWidth
          sx={{
            mt: 2,
            "& .MuiInputBase-root": {
              fontSize: "14px",
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: "14px",
              opacity: 0.9,
            },
          }}
        />


      </Box>
    </Grid>

  )
}

export default Childtwo