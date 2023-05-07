import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Grid } from '@mui/material';
import logo from '../../assets/images/logo.png';
import { HelpCenterOutlined } from '@mui/icons-material';
import { Badge } from '@mui/base';
import { Outlet, useNavigate } from 'react-router';
import AccountMenu from '../../components/AccountMenu/AccountMenu';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigateToPage = (route) => {
    navigate(route);
  };
  const options = [
    { text: 'Home', icon: <HomeOutlinedIcon />, route: '/dashboard/home' },
    {
      text: 'Services',
      icon: <MiscellaneousServicesOutlinedIcon />,
      route: '/dashboard/services'
    },
    {
      text: 'My Wallet',
      icon: <WalletOutlinedIcon />,
      route: '/dashboard/wallet'
    },
    {
      text: 'Management',
      icon: <SettingsSuggestOutlinedIcon />,
      route: '/dashboard/management'
    },
    {
      text: 'Help Center',
      icon: <HelpCenterOutlined />,
      route: '/dashboard/help'
    }
  ];
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {options.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
          >
            <ListItemButton onClick={() => navigateToPage(item.route)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
      >
        <Toolbar sx={{ backgroundColor: '#E2ACB4' }}>
          <Grid
            container
            flexDirection="row"
            alignItems="center"
            sx={{ justifyContent: { xs: 'space-evenly', sm: 'space-between' } }}
          >
            <Grid
              alignItems="center"
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Grid>

            <Grid
              container
              xs={3}
              sm={4}
              alignItems="center"
              flexDirection="row"
              columnGap={3}
              flexGrow={1}
              sx={{
                justifyContent: { xs: 'center', sm: 'flex-start' }
              }}
            >
              <Grid onClick={() => navigateToPage('/landing')}>
                <Avatar
                  src={logo}
                  variant="square"
                />
              </Grid>
              <Grid sx={{ display: { xs: 'none', sm: 'block' } }}>
                <h3 style={{ color: '#e26473' }}>Tap Cash</h3>
              </Grid>
            </Grid>

            <Grid
              xs={2}
              sm={6}
              container
              columnGap={3}
              alignItems="center"
              flexDirection="row"
              justifyContent="flex-end"
            >
              <Grid sx={{ display: { xs: 'none', sm: 'block' } }}>
                <IconButton size="small">
                  <Badge
                    badgeContent={100}
                    max={99}
                    color="primary"
                    overlap="circular"
                  >
                    <NotificationsNoneIcon />
                  </Badge>
                </IconButton>
              </Grid>
              <Grid>
                <AccountMenu />
              </Grid>
              <Grid sx={{ display: { xs: 'none', sm: 'block' } }}>
                <p style={{ color: '#000' }}>Ahmed Asaad Darwish</p>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard;

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};
