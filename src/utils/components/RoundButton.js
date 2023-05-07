import { Button } from '@mui/material';

function RoundButton({ text, isContained, onClickHandler, type }) {
  return (
    <Button
      variant={isContained ? 'contained' : 'outlined'}
      disableElevation
      sx={{
        textTransform: 'uppercase',
        borderRadius: '50px',
        backgroundColor: isContained ? '#e26473' : '#fffffff7',
        fontWeight: '400',
        fontSize: '1.2rem',
        padding: '5px',
        borderColor: isContained ? '' : '#e26473',
        color: isContained ? '#fffffff7' : '#e26473',
        '&:hover': {
          backgroundColor: isContained ? '#fffffff7' : '#e26473',
          color: isContained ? '#e26473' : '#fffffff7',
          border: '1px solid',
          borderColor: isContained ? '#e26473' : 'transparent'
        }
      }}
      type={type}
      fullWidth
      onClick={type === 'button' ? onClickHandler : undefined}
    >
      {text}
    </Button>
  );
}

export default RoundButton;
