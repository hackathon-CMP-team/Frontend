import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import LandingPage from './pages/LandingPage/LandingPage';
import AuthPage from './pages/AuthPage.js/AuthPage';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        >
          <Route path="services" />
          <Route path="management" />
          <Route path="help" />
          <Route path="wallet" />
        </Route>
        <Route
          path="/landing"
          element={<LandingPage />}
        />
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
