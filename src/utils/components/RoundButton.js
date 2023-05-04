import { Button } from '@mui/material';

function RoundButton({ text, isContained, onClickHandler }) {
  return (
    <Button
      variant={isContained ? 'contained' : 'outlined'}
      disableElevation
      sx={{
        textTransform: 'uppercase',
        width: '50%',
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
      onClick={onClickHandler}
    >
      {text}
    </Button>
  );
}

export default RoundButton;
