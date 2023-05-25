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
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes
} from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#e26473',
      light: '#fffffff7'
    },
    secondary: {
      main: '#e2acb4',
      light: '#ffeff4'
    }
  }
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
