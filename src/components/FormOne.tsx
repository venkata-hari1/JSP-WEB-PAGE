'use client';

import React, { Fragment, useEffect, useState } from 'react';
import Slider from './Slider/MobileSlider';
import { Box, Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { BigText, SmallText } from './ReusableStyles/Styles';

function FormOne() {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState<null | number>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
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
    console.log(id)
    setExpanded((prev) => (prev === id ? null : id));
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
    setExpanded(null)
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', newLanguage);
    }
  };

  return (
    <Fragment>
      <Slider />
      <Box>
        <Grid container>
          <Grid size={{xs:12,md:12,lg:12}}>
        
            {(t('sections', { returnObjects: true }) as Array<{ heading: string; description: string; readmore: string; readless: string }>).map((section, index) => (
              <Box key={index}>
                <BigText>{section.heading}</BigText>
                <SmallText>
                  {expanded === index ? section.description : section.description.slice(0, 350)}
                  {section.description.length > 350 && (
                    <Button
                      size="small"
                      sx={{ textTransform: 'none', fontWeight: '900', color: 'red', ml: 1, fontSize: '14px' }}
                      onClick={() => toggleEvent(index)}
                    >
                      {expanded === index ? section.readless : section.readmore}
                    </Button>
                  )}
                </SmallText>
              </Box>
            ))}
            <FormControl>
              <h3>{t('chooselanguage.formlabel')}?</h3>
              <RadioGroup row name="language-selection" value={selectedLanguage} onChange={handleLanguageChange}>
                {(t('chooselanguage.options', { returnObjects: true }) as Array<{ language: string; code: string }>).map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option.code}
                    control={
                      <Radio
                        color="default"
                        sx={{
                          '&.Mui-checked': {
                            color: '#FF0000',
                          },
                        }}
                      />
                    }
                    label={<p>{option.language}</p>}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}

export default FormOne;
