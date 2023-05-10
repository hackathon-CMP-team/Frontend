import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import LandingPage from './pages/LandingPage/LandingPage';
import AuthPage from './pages/AuthPage.js/AuthPage';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Dashboard from './pages/Dashboard/Dashboard';
import Services from './pages/Dashboard/Services';
import Management from './pages/Dashboard/Management';
import Help from './pages/Dashboard/Help';
import MyWallet from './pages/Dashboard/MyWallet';
import Home from './pages/Dashboard/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        >
          <Route
            path="home"
            element={<Home />}
          />
          <Route
            path="services"
            element={<Services />}
          />
          <Route
            path="management"
            element={<Management />}
          />
          <Route
            path="help"
            element={<Help />}
          />
          <Route
            path="wallet"
            element={<MyWallet />}
          />
        </Route>

        <Route
          path="/auth"
          element={<AuthPage />}
        >
          <Route
            path="login"
            element={<Login />}
          />
          <Route
            path="signup"
            element={<Signup />}
          />
          <Route
            path="forget-password"
            element={<ForgetPassword />}
          />
          <Route
            path="reset-password"
            element={<ResetPassword />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
