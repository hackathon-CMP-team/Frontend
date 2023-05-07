import { Typography } from '@mui/material';
import classe from './MoneyCard.module.css';

function MoneyCard({ title, content }) {
  return (
    <div className={classe['money-card']}>
      <div>
        <Typography
          sx={{ color: '#7E84A3', fontSize: '1rem' }}
          variant="h6"
        >
          {title}
        </Typography>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default MoneyCard;
