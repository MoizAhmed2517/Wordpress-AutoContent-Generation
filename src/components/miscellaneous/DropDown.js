import React from 'react';

// Material UI component
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const DropDown = (props) => {

  const handleDropDown = (event, value) => {
    props.valueSet(value);
  }
  
  return (
    <Autocomplete
      onChange={(event, value) => handleDropDown(event, value)}
      id="tags-outlined"
      options={props.data}
      // getOptionLabel={option => option.label}
      // filterSelectedOptions
      disablePortal
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          placeholder={props.placeholder}
        />
      )}
    />
  )
}

export default DropDown