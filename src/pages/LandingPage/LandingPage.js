import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import phone from '../../assets/images/phone.jpeg';
import { TypeAnimation } from 'react-type-animation';
import RoundButton from '../../utils/components/RoundButton';

function LandingPage() {
  return (
    <Grid sx={{ marginTop: '1rem' }}>
      <NavBar />
      <Box sx={{ height: '100vh', maxWidth: '100%', marginTop: '1.5rem' }}>
        <Container
          maxWidth="lg"
          sx={{
            maxWidth: '100%',
            overflowX: 'hidden',
            padding: { xs: '2rem' }
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sm={8}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%'
                }}
              >
                <TypeAnimation
                  sequence={[
                    'Welcome to', // Types 'One'
                    1200, // Waits 1s
                    '',
                    500
                  ]}
                  wrapper="h1"
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    fontSize: '5rem',
                    fontWeight: '500',
                    color: '#302E2E'
                  }}
                />
                <br />
                <TypeAnimation
                  sequence={[
                    'Tap Cash', // Types 'One'
                    1200, // Waits 1s
                    '',
                    500
                  ]}
                  wrapper="h2"
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    fontSize: '4rem',
                    fontWeight: '500',
                    color: '#e26473'
                  }}
                />
              </Box>
              <Typography
                sx={{
                  color: '#302E2E',
                  fontSize: '1.3rem',
                  marginTop: '3rem'
                }}
              >
                Empower your money, simplify your life, smart wallet in your
                hand everywhere.
              </Typography>
              <Typography
                sx={{
                  color: '#CCC9C9',
                  fontSize: '1.3rem',
                  marginBottom: '3rem'
                }}
              >
                Allow you to access, withdraw ,send money and more!
              </Typography>
              <div style={{ width: '20%' }}>
                <RoundButton
                  isContained
                  text="Sign Up"
                />
              </div>
            </Grid>
            <Grid
              item
              sm={4}
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  heigt: '100%',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                  position: 'relative'
                }}
              >
                <Box
                  sx={{
                    bgcolor: '#e26473',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    borderTopLeftRadius: '10%',
                    borderTopRightRadius: '10%'
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: '80%',
                      maxHeight: '95%',
                      borderRadius: '20px 20px 0 0',
                      overflow: 'hidden'
                    }}
                  >
                    <img
                      src={phone}
                      alt="Tap Cash"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Grid>
  );
}

export default LandingPage;
