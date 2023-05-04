import { Outlet } from 'react-router';
import classes from './AuthPage.module.css';
import VectorAuthPage from '../../utils/components/VectorAuthPage';
import logo from '../../assets/logo/wallets.png';
import styles from '../../utils/styles/form.module.css';

function AuthPage() {
  return (
    <div className={classes['auth-container']}>
      <section className={classes['left-part']}>
        <div className={styles['logo-box']}>
          <img
            src={logo}
            alt=""
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
