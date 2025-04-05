"use client";

import React, { Fragment, useEffect, useState } from 'react';
import Slider from './Slider/MobileSlider';
import { Box, Button, Card, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment,Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { BigText, ButtonText, FormGrid, FormLabelText, MiddleText, RadioButtonText, RootContainer, SmallText, StrongSmallText } from './ReusableStyles/Styles';
import { React_Type } from '@/utils/Types';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useStyles } from './MakeStyles/Style';
function FormOne() {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState<null | number>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const {classes}:any = useStyles();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('selectedLanguage');
      if (storedLanguage) {
        setSelectedLanguage(storedLanguage);
        i18n.changeLanguage(storedLanguage);
      }
    }
     
   }, []);

  const toggleEvent = (id: number) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', newLanguage);
    }
  };

  return (
    <Fragment>
      <Slider />
      <RootContainer>
        <Grid container sx={{ width: '93%' }}>
          <Grid>
            {(
              t('sections', { returnObjects: true }) as Array<{
                heading: string;
                description: React_Type | Array<{ subheading: string; content: string }>;
                readmore: string;
                readless: string;
              }>
            ).map((section, index) => {
              return (
                <Box key={index} sx={{ mb: 3 }}>
                  <BigText>{section.heading}</BigText>
                  {Array.isArray(section.description) ? (
                    <>
                      {section.description
                        .slice(0, expanded === index ? section.description.length : 3)
                        .map((des, idx) => (
                          <Typography component='p' key={idx}>
                            < StrongSmallText as='span'>{des.subheading}</ StrongSmallText>
                            <SmallText as='span'>{des.content}</SmallText>.
                          </Typography>


                        ))}

                      {section.description.length > 3 && (
                        <ButtonText onClick={() => toggleEvent(index)}>
                          {expanded === index ? section.readless : section.readmore}
                        </ButtonText >
                      )}
                    </>
                  ) : (
                    (() => {
                      const showReadMore = section.description.length > 350;
                      return (
                        <Box>
                          <SmallText>
                            {expanded === index || !showReadMore
                              ? section.description
                              : `${section.description.slice(0, 350)}...`}
                            {showReadMore && (
                              <ButtonText onClick={() => toggleEvent(index)}>
                                {expanded === index ? section.readless : section.readmore}
                              </ButtonText>
                            )}
                          </SmallText>

                        </Box>
                      );
                    })()
                  )}

                </Box>
              )
            })}
            <FormControl fullWidth>
              <MiddleText>{t('chooselanguage.formlabel')}</MiddleText>
              <RadioGroup row name="language-selection" value={selectedLanguage} onChange={handleLanguageChange}>
                {(
                  t('chooselanguage.options', { returnObjects: true }) as Array<{ language: string; code: string }>
                ).map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option.code}
                    control={
                      <Radio
                        size='small'
                        color="default"
                        classes={{ root: classes.radioChecked }}
                      />
                    }
                    label={<RadioButtonText>{option.language}</RadioButtonText>}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <FormGrid>
              <Box>
                <FormLabelText>{t('name')} <Typography component="span" color='red'>*</Typography></FormLabelText>
                <TextField placeholder={t('placeholder')}
                  fullWidth
           
                  classes={{root:classes.textfield}}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.outlineBorder,
                    },
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PermIdentityIcon sx={{ fontSize: '20px',color:'red' }} />
                      </InputAdornment>
                    )
                  }}
                />
              </Box>
              <ErrorOutlineIcon sx={{ marginTop: '35px',color:'#889095' }} />
              <Box>
                <FormLabelText>{t('phone')}<Typography component="span" color='red'>*</Typography></FormLabelText>
                <TextField
                  type="number"
                  classes={{root:classes.textfield}}
                  fullWidth
                  InputProps={{
                    classes: {
                      notchedOutline: classes.outlineBorder,
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneIcon sx={{ fontSize: "18px", marginRight: "8px",color:'red' }} />
                        <Typography component="span">+91</Typography>
                      </InputAdornment>
                    ),
                  }}
                />

              </Box>
              <ErrorOutlineIcon sx={{ marginTop: '35px',color:'#889095' }} />
            </FormGrid>
          </Grid>
        </Grid>
      </RootContainer>
    </Fragment>
  );
}

export default FormOne;
