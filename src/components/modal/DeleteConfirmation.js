import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteConfirmation = (props) => {

    const handleModalClose = () => {
        // navigate(props.nav)
        props.setOpen(false);
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
              The '{props.topic}' will be deleted. The process can't be revert.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleModalClose}>Cancel</Button>
            <Button onClick={handleModalClose} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
    )
}

export default DeleteConfirmation