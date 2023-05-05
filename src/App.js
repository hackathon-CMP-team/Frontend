import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import LandingPage from './pages/LandingPage/LandingPage';
import AuthPage from './pages/AuthPage.js/AuthPage';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
