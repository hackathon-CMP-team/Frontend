import logo from '../../assets/images/logo.png';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StyledNavLink from '../StyledNavLink/StyledNavLink';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { authActions } from '../../store/features/auth/authSlice';
import { useState } from 'react';
import RoundButton from '../../utils/components/RoundButton';

const drawerWidth = 240;
const navItems = ['Home', 'About Us', 'Contact Us', 'Services'];

function NavBar(props) {
  const { isAuth } = useSelector((state) => state.auth);
  console.log(isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate('/auth/login');
  };
  const logoutHandler = async () => {
    await dispatch(authActions.logout());
    // navigate('/')
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2, color: '#e26473' }}
      >
        Tap Cash
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', marginTop: '1rem', maxWidth: '100%' }}>
      <CssBaseline />
      <AppBar
        position="sticky"
        component="nav"
        sx={{
          bgcolor: {
            xs: '#e26473',
            sm: 'transparent'
          }
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            sx={{ height: 64 }}
            alt="tap cash logo"
            src={logo}
          />
          <Typography
            variant="h4"
            component="div"
            sx={{
              marginLeft: '0.5rem',
              color: '#e26473',
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' }
            }}
          >
            Tap Cash
          </Typography>
          <Toolbar
            sx={{
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'space-between',
              flexGrow: '1'
            }}
          >
            {navItems.map((item) => (
              <StyledNavLink
                key={item}
                text={item}
                to={`#${item}`}
              />
            ))}
            <div style={{ flexBasis: '25%' }}>
              <RoundButton
                isContained={false}
                text="login"
                type="button"
              />
            </div>
          </Toolbar>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default NavBar;

// function NavBar() {

//   return (
//     <Grid
//       item
//       xs={12}
//       container
//       minHeight="50px"
//       justifyContent="space-around"
//       style={{
//         backgroundColor: { xs: '#e2acb4', sm: 'transparent', md: 'transparent' }
//       }}
//     >
//       <Grid
//         container
//         item
//         xs={3}
//         columnGap={2}
//         alignItems="center"
//       >
//         <Grid>

//         </Grid>
//         <Grid>
//           <h3 style={{ color: '#e26473' }}>Tap Cash</h3>
//         </Grid>
//       </Grid>
//       <Grid
//         xs={8}
//         justifyContent="flex-end"
//         container
//         item
//         alignItems="center"
//         columnGap={4}
//       >
//         <Grid xs="auto">
//           <StyledNavLink
//             text="Home"
//             to="#home"
//           />
//         </Grid>
//         <Grid xs="auto">
//           <StyledNavLink
//             text="Services"
//             to="#services"
//           />
//         </Grid>
//         <Grid xs="auto">
//           <StyledNavLink
//             text="About us"
//             to="#about-us"
//           />
//         </Grid>
//         <Grid xs="auto">
//           <StyledNavLink
//             text="contact us"
//             to="#contact-us"
//           />
//         </Grid>
//         <Grid xs={2}>
//           <RoundButton
//             isContained={false}
//             text="login"
//             type="button"
//           />
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }

// export default NavBar;
