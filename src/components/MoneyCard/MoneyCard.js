import { Typography } from '@mui/material';
import classes from './MoneyCard.module.css';

function MoneyCard(props) {
  return (
    <div className={classes['money-card']}>
      <div>
        <Typography
          sx={{ color: '#7E84A3', fontSize: '1rem' }}
          variant="h6"
        >
          {props.title}
        </Typography>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default MoneyCard;
