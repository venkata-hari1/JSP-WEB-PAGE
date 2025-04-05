import { Grid, Box, FormLabel, Typography, ButtonGroup, Stack, IconButton, TextField, } from '@mui/material'
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
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Checkbox from '@mui/material/Checkbox';
import SchoolIcon from '@mui/icons-material/School';  
import ElderlyIcon from '@mui/icons-material/Elderly'; 
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import GrassIcon from '@mui/icons-material/Grass';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import HomeIcon from '@mui/icons-material/Home';

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




      <Box mt={5}>
        <SmallText>How Many Adults Above (18+ Years)?<Typography component='span' color='red'>*</Typography></SmallText>

       
        <Stack direction="row" spacing={2}>
     
      <Box
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
          Men
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
      </Box>

      {/* Women */}
      <Box
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
          Women
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
      </Box>
    </Stack>
 </Box>


 <Box mt={5}>
        <SmallText>No of Voters In The Family*<Typography component='span' color='red'>*</Typography></SmallText>

       
        <Stack direction="row" spacing={2}>
     
      <Box
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
         Boys
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
      </Box>

    
      <Box
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
          Girls
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
      </Box>
    </Stack>
 </Box>


 <Box mt={5} >
        <SmallText>What Government Schemes Are You Currently Receiving?<Typography component='span' color='red'>*</Typography> <Box component="br" />(Choose The Applicable One)</SmallText>
  <Stack>
  <Stack direction="row" alignItems="center">
  <Checkbox defaultChecked  sx={{
          color: "#333333",
          '&.Mui-checked': {
            color: "#FF0000"
            ,
          },
        }}/> <SchoolIcon />
  <Typography component="div" ml={3}>Education Benefits</Typography>
  </Stack>
  <Stack direction="row" alignItems="center">
  <Checkbox/> <ElderlyIcon />
  <Typography component="div" ml={3}>Pension<SmallText variant='span'>( For Widows And Old Age )</SmallText></Typography>
  </Stack>
  <Stack direction="row" alignItems="center">
  <Checkbox  /> <AssistWalkerIcon/>
  <Typography component="div" ml={3}>Pension For Disabled</Typography>
  </Stack>

  <Stack direction="row" alignItems="center">
  <Checkbox  defaultChecked   sx={{
          color: "#333333",
          '&.Mui-checked': {
            color: "#FF0000"
            ,
          },
        }}/> <MedicalServicesIcon/>
  <Typography component="div" ml={3}>Medical Benefits</Typography>
  </Stack>
   
  <Stack direction="row" alignItems="center">
  <Checkbox  /> <GrassIcon/>
  <Typography component="div" ml={3}>Rythu Bandhu</Typography>
  </Stack>

  <Stack direction="row" alignItems="center">
  <Checkbox  /> <RiceBowlIcon/>
  <Typography component="div" ml={3}>Ration</Typography>
  </Stack> 
   
  <Stack direction="row" alignItems="center">
  <Checkbox  /> <HomeIcon />
  <Typography component="div" ml={3}>TIDCO Houses</Typography>
  
  </Stack>  
  </Stack>
  </Box>      

  <Box mt={5} >
  <Typography>Additional Suggestions / Comments
    <SmallText>(Please mention the issues you are facing with the government and what you expect from the JanaSena government)
    </SmallText>
  </Typography>
  

  <TextField
      label="Your Message"
      multiline
      rows={4}
      variant="outlined"
      placeholder="Share your concerns regarding government policies, challenges you are facing, and your expectations from the JanaSena government..." 
      fullWidth
      sx={{
        borderRadius: '12px',
        backgroundColor: '#fff',
      }}
    />  


 </Box>
</Grid>

  )
}

export default Childtwo