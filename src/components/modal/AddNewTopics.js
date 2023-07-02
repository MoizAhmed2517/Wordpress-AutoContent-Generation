import React from 'react'
import axios from 'axios';
import { useSnackbar } from 'notistack';
import Cookies from 'js-cookie';
// Mui component
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, TextField } from '@mui/material';

const AddNewTopics = (props) => {
    const [scroll, setScroll] = React.useState('paper');
    const [mainTopic, setMainTopic] = React.useState(props.topic.mTopic);
    const [subTopic, setSubTopic] = React.useState(props.topic.sTopic);

    const { enqueueSnackbar } = useSnackbar()

    const handleClose = async () => {
      const item = {
        user: 1,
        topic_name: props.topic.mTopic || mainTopic,
        sub_topic: subTopic,
      }
      try {
        const config = {
          headers: {
              Authorization: `JWT ${Cookies.get("access_token")}`
          }
        }
        const res = await axios.put(`http://mujtabatasneem.pythonanywhere.com/api/topics/${props.topic.id}/`, item, config)
        enqueueSnackbar(res)
        props.setOpen(false);
        window.location.reload(false);
      } catch (error) {
        enqueueSnackbar(error);
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
                  <TextField fullWidth variant="outlined" label="Main Topic" placeholder="What's your main topic?" defaultValue={props.topic.mTopic} onChange={(event) => setMainTopic(event.target.value)} />
              </Grid>
              <Grid item xs={12}>
                  <TextField fullWidth multiline variant="outlined" label="Sub Topic" placeholder="What's your subtopic?" defaultValue={props.topic.sTopic} onChange={(event) => setSubTopic(event.target.value)} />
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

export default AddNewTopics