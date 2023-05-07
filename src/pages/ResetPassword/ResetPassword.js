import { useFormik } from 'formik';
import * as Yup from 'yup';
import RoundButton from '../../utils/components/RoundButton';
import { Grid } from '@mui/material';
import StyledLink from '../../utils/components/StyledLink';
import ErrorMessage from '../../utils/components/ErrorMessage';
import PasswordInput from '../../utils/components/PasswordInput';

function ResetPassword() {
  const formik = useFormik({
    initialValues: {
      password: '',
      confPassword: ''
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .matches(/^\d{6}$/, 'Password must consist of exactly 6 digits')
        .required('Password is required'),
      confPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      )
    }),
    onSubmit: (values) => {
      alert(values.phone);
    }
  });
  return (
    <form onSubmit={formik.submitForm}>
      <Grid
        container
        justifyContent="center"
      >
        <Grid
          xs={8}
          container
          justifyContent="center"
          rowGap={1.5}
        >
          <Grid
            xs={12}
            // style={{ textAlign: 'center' }}
          >
            <h2 style={{ color: '#e26473', fontSize: '1.3rem' }}>
              Reset Your Password
            </h2>
          </Grid>

          <Grid xs={12}>
            <PasswordInput
              id="password"
              name="password"
              variant="outlined"
              label="Enter a new Password"
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
              variant="outlined"
              label="Confirm the new Password"
              error={formik.touched.password && Boolean(formik.errors.password)}
              formProps={formik.getFieldProps('confPassword')}
            />

            {formik.touched.password && formik.errors.password ? (
              <ErrorMessage message={formik.errors.password} />
            ) : null}
          </Grid>
          <Grid
            xs={12}
            style={{ textAlign: 'center' }}
          >
            <StyledLink
              to="/auth/login"
              text="Back to login"
            />
          </Grid>
          <Grid xs={12}>
            <RoundButton
              isContained
              text="Reset"
              type="submit"
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default ResetPassword;
