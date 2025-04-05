import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Redux/Store/store';
import { setOpen } from '../Redux/Reducers/Language';

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
      <DialogTitle id="scroll-dialog-title">Are you sure about these details?</DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        <TableContainer component={Paper} ref={descriptionElementRef} tabIndex={-1}>
          <Table>
            <TableBody>
              {Object.entries(formData).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                    {key.replace(/([A-Z])/g, ' $1')}
                  </TableCell>
                  <TableCell>{value || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button  sx={{textTransform:'capitalize',fontSize:'14px'}} variant="outlined"
        color="primary" onClick={handleClose}>Cancel</Button>
        <Button 
        variant="contained"
        color="error"
        sx={{textTransform:'capitalize',fontSize:'14px'}}
        onClick={() => {handleClose()}}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
