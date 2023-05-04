import { TextField, styled } from '@mui/material';
import classes from '../../utils/styles/form.module.css';
import React from 'react';

const StyledInput = styled(TextField)(({ theme }) => ({
  width: '50%',
  [theme.breakpoints.down('md')]: {
    width: '80%'
  }
}));

function RoundInput({ id, name, type, variant, label, error, formProps }) {
  return (
    <TextField
      id={id}
      name={name}
      type={type}
      variant={variant}
      label={label}
      InputProps={{
        style: {
          borderRadius: '20px'
        }
      }}
      InputLabelProps={{
        className: classes.label
      }}
      style={{
        flexShrink: '1',
        marginBottom: '8px',
        width: '50%'
      }}
      error={error}
      {...formProps}
    />
  );
}

export default RoundInput;
