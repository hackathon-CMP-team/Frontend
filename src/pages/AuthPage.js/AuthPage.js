import { Outlet, useNavigate } from 'react-router';
import classes from './AuthPage.module.css';
import VectorAuthPage from '../../utils/components/VectorAuthPage';
import logo from '../../assets/images/logo.png';
import { Box } from '@mui/material';

function AuthPage() {
  const navigate = useNavigate();
  return (
    <div className={classes['auth-container']}>
      <section className={classes['left-part']}>
        <div className={classes['logo-box']}>
          <Box
            component="img"
            sx={{ height: 50 }}
            alt="tap cash logo"
            src={logo}
            onClick={() => navigate('/')}
          />
          <h1>Tap Cash</h1>
        </div>
        <Outlet />
      </section>
      <section className={classes['right-part']}>
        <VectorAuthPage />
      </section>
    </div>
  );
}

export default AuthPage;
