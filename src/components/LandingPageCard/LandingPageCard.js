import { Avatar, Grid } from '@mui/material';
import classes from './LandingPageCard.module.css';
import { useTheme } from '@mui/material/styles';

function LandingPageCard({ icon, text }) {
  const theme = useTheme();
  return (
    <Grid
      item
      xs={3}
      direction="column"
      className={classes['landing-card']}
    >
      <Avatar
        style={{ backgroundColor: `${theme.palette.secondary.light}` }}
        sx={{ width: 48, height: 48 }}
      >
        {icon}
      </Avatar>
      <h6>{text}</h6>
    </Grid>
  );
}

export default LandingPageCard;
