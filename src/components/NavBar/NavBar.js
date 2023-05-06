import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import RoundButton from '../../utils/components/RoundButton';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/features/auth/authSlice';

function NavBar() {
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

  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      style={{ color: '#e26473' }}
    >
      <Grid xs={4}>
        <h2>Tap Cash</h2>
      </Grid>
      <Grid xs={8}>
        <Grid
          container
          dir="row"
          columnGap={2}
          justifyContent="space-evenly"
        >
          <Grid>
            <NavLink to="/">Home</NavLink>
          </Grid>
          <Grid>
            <NavLink to="/services">Services</NavLink>
          </Grid>
          <Grid>
            <NavLink to="/about">About Us</NavLink>
          </Grid>
          <Grid>
            <NavLink to="/contact">Contact Us</NavLink>
          </Grid>
          <Grid xs={2}>
            <RoundButton
              text={isAuth ? 'Logout' : 'Login'}
              isContained={false}
              type="button"
              onClickHandler={isAuth ? logoutHandler : loginHandler}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NavBar;
