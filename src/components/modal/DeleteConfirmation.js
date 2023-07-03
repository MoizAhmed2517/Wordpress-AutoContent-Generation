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

const DeleteConfirmation = (props) => {

  const { enqueueSnackbar } = useSnackbar();

  const handleModalClose = async () => {
      try {
        const config = {
          headers: {
              Authorization: `JWT ${Cookies.get("access_token")}`
          }
        }
        const res = await axios.delete(`https://blog.enerlyticslab.com/api/competitors/${props.delKey.id}/`, config)
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
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The '{props.delKey.name}' will be deleted. The process can't be revert.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setOpen(false)}>Cancel</Button>
          <Button onClick={handleModalClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default DeleteConfirmation