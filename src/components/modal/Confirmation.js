import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';

const Confirmation = (props) => {

  const { enqueueSnackbar } = useSnackbar();
  const [blog, setBlog] = useState({})
  const [selectId, setSelectId] = useState([]);

  const findKeyByValue = (value) => {
    for (const key in props.blogData) {
      if (props.blogData.hasOwnProperty(key) && props.blogData[key] === value) {
        return key;
      }
    }
    return null;
  };
  

  const handleModalClose = async () => {
    const key = findKeyByValue(props.dropValue.label);
    const category = [];
    category.push(parseInt(key));
    const item = {
      "status": "publish",
      title: props.title,
      content: props.response,
      categories: category
    }
    console.log(item);
    const config = {
      headers: {
          Authorization: `JWT ${Cookies.get("access_token")}`
      }
    }
    try {
      const response = await axios.post("https://blog.enerlyticslab.com/api/wp-post/", item, config)
      console.log(response)
      props.setOpen(false);
      // window.location.reload(false);
    } catch (err) {
      enqueueSnackbar(err);
      props.setOpen(false);
    }

    
  }


  return (
    <Dialog
        open={props.openModal}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We will be posting the content. Once posted the process can't be reverted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setOpen(false)}>Cancel</Button>
          <Button onClick={handleModalClose} autoFocus>
            Post
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default Confirmation