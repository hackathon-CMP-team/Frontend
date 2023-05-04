import { TextField, styled } from '@mui/material';
import classes from '../../utils/styles/form.module.css';
import React from 'react';

function RoundInput({
  id,
  name,
  type,
  variant,
  label,
  error,
  formProps,
  width = 50,
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
      InputLabelProps={{
        className: classes.label
      }}
      style={{
        flexShrink: '1',
        width: `${width}%`
      }}
      error={error}
      {...formProps}
    />
  );
}

export default RoundInput;
