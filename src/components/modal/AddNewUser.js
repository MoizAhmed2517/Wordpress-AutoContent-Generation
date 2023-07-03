import React from 'react'
import axios from 'axios';
import { useSnackbar } from 'notistack';
import Cookies from 'js-cookie';

// mui component
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, TextField } from '@mui/material';

const AddNewUser = (props) => {
  const [scroll, setScroll] = React.useState('paper');
  const [name, setName] = React.useState('');
  const [descr, setDescr] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [isValidUrl, setIsValidUrl] = React.useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleUrl = (event) => {
    const inputValue = event.target.value;
    try {
      new URL(inputValue);
      setUrl(inputValue);
      setIsValidUrl(false);
    } catch (error) {
      setUrl(inputValue);
      setIsValidUrl(true);
    }

  }

  const handleClose = async (variant="error") => {
    const item = {
      user: 1,
      competitor_name: name,
      competitor_description: descr,
      competitor_blog_link: url,
    }
    console.log(item);
    try {
      const config = {
        headers: {
            Authorization: `JWT ${Cookies.get("access_token")}`
        }
      }
      const res = await axios.post("https://blog.enerlyticslab.com/api/competitors/", item, config);
      props.setOpen(false);
      window.location.reload(false);
    } catch (error) {
      enqueueSnackbar(error, {variant} );
    } 
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
                <TextField fullWidth variant="outlined" label="Competitor Name" placeholder="Write the blog name you want to track" onChange={event => setName(event.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth multiline variant="outlined" label="Descrption" placeholder="Write descrption of the blog" onChange={event => setDescr(event.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth variant="outlined" label="Web URL" placeholder="Place a web url (write in this way https://www.xyz.com)" helperText="URL need to be valid else you can't add competitor" onChange={handleUrl} error={isValidUrl} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setOpen(false)}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
  )
}

export default AddNewUser