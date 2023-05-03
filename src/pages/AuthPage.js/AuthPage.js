import { Outlet } from 'react-router';
import classes from './AuthPage.module.css';
import VectorAuthPage from '../../utils/components/VectorAuthPage';

function AuthPage() {
  return (
    <div className={classes['auth-container']}>
      <section className={classes['left-part']}>
        <Outlet />
      </section>
      <section className={classes['right-part']}>
        <VectorAuthPage />
      </section>
    </div>
  );
}

export default AuthPage;
