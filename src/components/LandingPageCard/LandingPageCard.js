import { Avatar, Grid } from '@mui/material';
import classes from './LandingPageCard.module.css';

function LandingPageCard({ icon, text }) {
  return (
    <Grid
      item
      xs={12}
      sm={5}
      md={3}
      lg={2}
      direction="column"
      className={classes['landing-card']}
    >
      <Avatar
        style={{ backgroundColor: '#ffeff4' }}
        sx={{ width: 48, height: 48 }}
      >
        {icon}
      </Avatar>
      <h6>{text}</h6>
    </Grid>
  );
}

export default LandingPageCard;
