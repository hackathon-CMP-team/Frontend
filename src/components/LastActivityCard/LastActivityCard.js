import React from 'react';
import classes from '../MoneyCard/MoneyCard.module.css';
import { Grid, Typography } from '@mui/material';
import RoundButton from '../../utils/components/RoundButton';

function LastActivityCard() {
  return (
    <div className={classes['money-card']}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
      >
        <Grid item>
          <Typography
            sx={{ color: '#7E84A3', fontSize: '1rem' }}
            variant="h6"
          >
            Last Activity
          </Typography>
        </Grid>

        <Grid item>
          <RoundButton
            isContained
            text="income"
          />
        </Grid>
        <Grid item>
          <RoundButton
            isContained
            text="outcome"
          />
        </Grid>
        <Grid item>
          <RoundButton
            text="view all"
            isContained
          />
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
}

export default LastActivityCard;
