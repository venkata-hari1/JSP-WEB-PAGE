import * as React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import PinDropIcon from '@mui/icons-material/PinDrop';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Redux/Store/store';
import { setOpen } from '../Redux/Reducers/Language';
import { SmallText } from '../ReusableStyles/Styles';

const fieldIcons: Record<string, React.ReactNode> = {
  name: <PersonIcon />,
  mobile: <PhoneIcon />,
  voterid: <HowToVoteIcon />,
  janasenamember: <HowToVoteIcon />,
  houseno: <HomeIcon />,
  district: <PublicIcon />,
  constituency: <LocationCityIcon />,
  divison: <LocationCityIcon />,
  villagearea: <LocationCityIcon />,
  pincode: <PinDropIcon />,
  employeementstatus: <WorkIcon />,
  education: <SchoolIcon />,
  adults: <Diversity3Icon />,
};

export default function ScrollDialog() {
  const dispatch = useDispatch<AppDispatch>();
  const open = useSelector((state: RootState) => state.Language);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');
  const descriptionElementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (open.open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open.open]);

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  const formData = open.form;

  return (
    <Dialog
      open={open.open}
      onClose={handleClose}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">
        Are you sure about these details?
      </DialogTitle>
      <DialogContent dividers={scroll === 'paper'} ref={descriptionElementRef} tabIndex={-1}>
        <List>
          {Object.entries(formData).map(([key, value]) => (
            <ListItem key={key} alignItems="flex-start" disableGutters>
              <ListItemIcon>
                {fieldIcons[key] || <PersonIcon />}
              </ListItemIcon>
              <ListItemText
  primary={
    <Box display="flex" alignItems="center" gap={1}>
      <Typography fontWeight="bold" textTransform="capitalize" minWidth={120}>
        {key.replace(/([A-Z])/g, ' $1')}
      </Typography>
      <SmallText>
        {typeof value === 'object' && value !== null
          ? Object.entries(value)
              .map(([subKey, subValue]) => `${subKey}: ${subValue}`)
              .join(', ')
          : value || '-'}
      </SmallText>
    </Box>
  }
/>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ textTransform: 'capitalize', fontSize: '14px' }}
          variant="outlined"
          color="primary"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ textTransform: 'capitalize', fontSize: '14px' }}
          onClick={() => {
            handleClose();
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
