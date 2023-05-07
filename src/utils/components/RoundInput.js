import { TextField } from '@mui/material';
import React from 'react';

function RoundInput({
  id,
  name,
  type,
  variant,
  label,
  error,
  formProps,
  isFocused = false
}) {
  return (
    <TextField
      autoFocus={isFocused}
      id={id}
      name={name}
      type={type}
      variant={variant}
      label={label}
      InputProps={{
        style: {
          borderRadius: '10px'
        }
      }}
      fullWidth
      error={error}
      {...formProps}
    />
  );
}

export default RoundInput;
