import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Box, Typography, Container, Grid } from '@mui/material';
import phone from '../../assets/images/phone.jpeg';
import { TypeAnimation } from 'react-type-animation';
import RoundButton from '../../utils/components/RoundButton';
import { useNavigate } from 'react-router';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import LandingPageCard from '../../components/LandingPageCard/LandingPageCard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentsIcon from '@mui/icons-material/Payments';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import ObservedSection from '../../utils/components/ObservedSection';
import { useTheme } from '@mui/material/styles';

function LandingPage() {
  const theme = useTheme();
  const services = [
    { text: 'Transfer', icon: <ReplyAllIcon color="action" />, route: '' },
    { text: 'Withdraw', icon: <PointOfSaleIcon color="action" />, route: '' },
    { text: 'Request', icon: <RequestQuoteIcon color="action" />, route: '' },
    { text: 'Payment', icon: <PaymentsIcon color="action" />, route: '' },
    { text: 'Security', icon: <VerifiedUserIcon color="action" />, route: '' },
    {
      text: 'Online Shopping',
      icon: <MobileScreenShareIcon color="action" />,
      route: ''
    },
    {
      text: 'Manage Child Account',
      icon: <ManageAccountsIcon color="action" />,
      route: ''
    },
    { text: 'Virtual Card', icon: <CreditCardIcon color="action" />, route: '' }
  ];
  const navigate = useNavigate();
  const signupHandler = () => {
    navigate('/auth/signup');
  };
  return (
    <Grid sx={{ marginTop: '1rem' }}>
      <NavBar />

      {/*Home Section*/}
      <Box
        sx={{
          height: '100vh',
          maxWidth: '100%',
          marginTop: '1.5rem'
        }}
      >
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
                  type="button"
                  text="Sign Up"
                  onClickHandler={signupHandler}
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

        {/*Manage Your Finance Section*/}
        <ObservedSection sectionId="manage-your-finance">
          <Grid
            item
            container
            xs={12}
            sx={{
              bgcolor: 'primary.main'
            }}
            alignItems="center"
            paddingTop="10rem"
            paddingBottom="10rem"
          >
            <Grid
              item
              xs={3}
            >
              <img />
            </Grid>

            <Grid
              item
              container
              direction="column"
              rowGap={5}
              xs={6}
            >
              <Typography
                variant="h2"
                sx={{ color: '#302E2E', fontSize: '3.2rem', fontWeight: '500' }}
              >
                <span style={{ color: '#fff' }}>Manage</span> Your Finance
              </Typography>

              <Typography
                sx={{ color: '#302E2E', fontSize: '2rem', fontWeight: '400' }}
              >
                Finances at your fingerprint
              </Typography>
              <ul>
                <li style={{ fontSize: '1.3rem', fontWeight: '400' }}>
                  Quick & Fast Regestration
                </li>
                <li style={{ fontSize: '1.3rem', fontWeight: '400' }}>
                  Ease to Transfer & Request Money
                </li>
                <li style={{ fontSize: '1.3rem', fontWeight: '400' }}>
                  Finances at your fingerprints!
                </li>
              </ul>
            </Grid>
          </Grid>
        </ObservedSection>
        <ObservedSection sectionId="what-tap-cash">
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            xs={12}
            rowGap={8}
            paddingTop="10rem"
            paddingBottom="10rem"
          >
            <Grid item>
              <Typography
                variant="h1"
                style={{
                  color: '#302E2E',
                  fontSize: '2.8rem',
                  fontWeight: '600'
                }}
              >
                What{' '}
                <span style={{ color: `${theme.palette.primary.main}` }}>
                  Tap Cash
                </span>{' '}
                Can Offer ?
              </Typography>
            </Grid>
            <Grid
              item
              container
              columnGap={3}
              rowGap={3}
              justifyContent="center"
            >
              {services.map((service) => (
                <LandingPageCard
                  key={service.text}
                  icon={service.icon}
                  text={service.text}
                />
              ))}
            </Grid>
          </Grid>
        </ObservedSection>
      </Box>
    </Grid>
  );
}

export default LandingPage;
