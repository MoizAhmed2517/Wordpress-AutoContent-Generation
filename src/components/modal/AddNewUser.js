import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, TextField } from '@mui/material';

const AddNewUser = (props) => {
  const [scroll, setScroll] = React.useState('paper');

  const handleClose = () => {
    // navigate(props.nav)
    props.setOpen(false);
    }

  return (
    <Dialog
        open={props.openModal}
        onClose={props.handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth={'md'}
      >
        <DialogTitle id="scroll-dialog-title">Add New Competitor</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField fullWidth variant="outlined" label="Competitor Name" placeholder="Write the blog name you want to track" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth multiline variant="outlined" label="Descrption" placeholder="Write descrption of the blog" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth variant="outlined" label="Web URL" placeholder="place a web url (Also include https://)" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
  )
}

export default AddNewUser