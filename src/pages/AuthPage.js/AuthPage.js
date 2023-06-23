import { Outlet, useNavigate } from 'react-router';
import classes from './AuthPage.module.css';
import VectorAuthPage from '../../utils/components/VectorAuthPage';
import logo from '../../assets/images/logo.png';
import { Box } from '@mui/material';
import TopWave from '../../components/TopWave/TopWave';
import DownWave from '../../components/DownWave/DownWave';

function AuthPage() {
  const navigate = useNavigate();
  return (
    <div className={classes['auth-container']}>
      <section className={classes['left-part']}>
        <div className={classes['top-svg-container']}>
          <DownWave />
        </div>
        <div className={classes['bottom-svg-container']}>
          <TopWave />
        </div>
        <div className={classes['logo-box']}>
          <Box
            component="img"
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
