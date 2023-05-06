import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Grid } from '@mui/material';

function LandingPage() {
  return (
    <Grid
      container
      style={{ marginTop: '1rem' }}
    >
      <Grid xs={12}>
        <NavBar />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
