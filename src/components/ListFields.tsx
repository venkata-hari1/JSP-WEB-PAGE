import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ElderlyIcon from '@mui/icons-material/Elderly';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import GrassIcon from '@mui/icons-material/Grass';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import HomeIcon from '@mui/icons-material/Home';
import { useTranslation } from 'react-i18next';
import { SmallText } from './ReusableStyles/Styles';

export default function CheckboxList() {
  const { t } = useTranslation();
  const [checked, setChecked] = React.useState<number[]>([]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const icons = [
    <SchoolIcon />,
    <ElderlyIcon />,
    <AssistWalkerIcon />,
    <MedicalServicesIcon />,
    <GrassIcon />,
    <RiceBowlIcon />,
    <HomeIcon />,
  ];

  const schemeOptions = t('govtschemes.schemeoptions', { returnObjects: true }) as Array<{ option: string }>;

  return (
    <List sx={{ mt:1,width: {lg:'98%'}, bgcolor: 'background.paper' }}>
      {schemeOptions.map((option, index) => {
        const labelId = `checkbox-list-label-${index}`;
        return (
          <React.Fragment key={index}>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                <ErrorOutlineIcon sx={{ color: '#889095' }} />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.includes(index)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {icons[index]}
                      <SmallText sx={{ marginLeft: '10px' }}>{option.option}</SmallText>
                    </Box>
                  }
                />
              </ListItemButton>
            </ListItem>
            {index < schemeOptions.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </List>
  );
}
