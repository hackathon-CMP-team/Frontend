import { TextField, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
function PasswordInput({
  id,
  name,
  variant,
  label,
  error,
  formProps,
  isFocused = false,
  formikHook = null
}) {
  // Add these variables to your component to track the state
  const [showPassword, setShowPassword] = useState(false);
  // const [code, setCode] = useState('');

  // const handleChange = (event) => {
  //   const input = event.target.value.replace(/\D/g, ''); // allow only digits
  //   setCode(input.slice(0, 6)); // limit input to 6 digits
  // };
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <TextField
      autoFocus={isFocused}
      id={id}
      name={name}
      type={showPassword ? 'text' : 'password'}
      variant={variant}
      label={label}
      InputProps={{
        style: {
          borderRadius: '10px',
          textAlign: 'center'
        },
        maxLength: 6,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
      fullWidth
      error={error}
      {...formProps}
    />
  );
}

export default PasswordInput;
