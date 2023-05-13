import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../store/features/auth/authActions';
import * as Yup from 'yup';
import ErrorMessage from '../../utils/components/ErrorMessage';
import { useState } from 'react';
import RoundInput from '../../utils/components/RoundInput';
import RoundButton from '../../utils/components/RoundButton';
import { Alert, Grid, MenuItem, TextField } from '@mui/material';
import PasswordInput from '../../utils/components/PasswordInput';
import StyledLink from '../../utils/components/StyledLink';
import { useLocation, useNavigate } from 'react-router';

function Signup2() {
  const dispatch = useDispatch();
  const [isAdult, setIsAdult] = useState(true);
  const [failedRequest, setFailedRequest] = useState(false);
  const { isAuth, error, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { state } = useLocation();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confPassword: '',
      birthDate: '',
      gender: 'male',
      ...state
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      birthDate: Yup.date()
        .max(new Date(), 'Birth date must be before today')
        .required('Birth date is required'),

      password: Yup.string()
        .matches(/^\d{6}$/, 'Password must consist of exactly 6 digits')
        .required('Password is required'),

      confPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      ),

      gender: Yup.string()
        .required('Please choose a gender')
        .oneOf(['male', 'female'])
    }),
    onSubmit: async (values) => {}
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        justifyContent="center"
      >
        <Grid
          item
          container
          xs={8}
          justifyContent="center"
          rowGap={2}
        >
          <Grid
            xs={12}
            columnGap={1}
          >
            <RoundInput
              id="email"
              name="email"
              type="email"
              label="Email"
              error={formik.touched.email && Boolean(formik.errors.email)}
              formProps={formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorMessage message={formik.errors.email} />
            ) : null}
          </Grid>
          <Grid xs={12}>
            <RoundInput
              id="birthDate"
              name="birthDate"
              type="date"
              label=""
              error={
                formik.touched.birthDate && Boolean(formik.errors.birthDate)
              }
              formProps={formik.getFieldProps('birthDate')}
            />
            {formik.touched.birthDate && formik.errors.birthDate ? (
              <ErrorMessage message={formik.errors.birthDate} />
            ) : null}
          </Grid>
          <Grid xs={12}>
            <PasswordInput
              id="password"
              name="password"
              label="PIN"
              error={formik.touched.password && Boolean(formik.errors.password)}
              formProps={formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <ErrorMessage message={formik.errors.password} />
            ) : null}
          </Grid>

          <Grid xs={12}>
            <PasswordInput
              id="confPassword"
              name="confPassword"
              label="Confirm PIN"
              error={
                formik.touched.confPassword &&
                Boolean(formik.errors.confPassword)
              }
              formProps={formik.getFieldProps('confPassword')}
            />
            {formik.touched.confPassword && formik.errors.confPassword ? (
              <ErrorMessage message={formik.errors.confPassword} />
            ) : null}
          </Grid>

          <Grid xs={12}>
            <TextField
              id="gender"
              name="gender"
              select
              label="Select your gender"
              defaultValue="male"
              InputProps={{
                style: {
                  borderRadius: '10px'
                }
              }}
              fullWidth
              error={formik.errors.gender}
              {...formik.getFieldProps('gender')}
            >
              {['female', 'male'].map((option) => (
                <MenuItem
                  key={option}
                  value={option}
                >
                  {option}
                </MenuItem>
              ))}
            </TextField>
            {formik.touched.gender && formik.errors.gender ? (
              <ErrorMessage message={formik.errors.gender} />
            ) : null}
          </Grid>
          <Grid
            xs={12}
            style={{ textAlign: 'center' }}
          >
            <StyledLink
              text="Already have an email ?"
              to="/auth/login"
            />
          </Grid>
          <Grid xs={12}>
            <RoundButton
              isLoadingBtn={true}
              loading={loading}
              isContained
              type="submit"
              text="Register"
            />
          </Grid>
          {failedRequest ? (
            <Grid xs={12}>
              <Alert
                sx={{
                  fontSize: '1.3rem',
                  alignItems: 'center',
                  borderRadius: '20px'
                }}
                severity="error"
              >
                Invalid phone or password — check them out!
              </Alert>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </form>
  );
}

export default Signup2;

/**
 *
 *
 */
