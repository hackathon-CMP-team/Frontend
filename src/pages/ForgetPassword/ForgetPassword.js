import { Grid } from '@mui/material';
import RoundInput from '../../utils/components/RoundInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import RoundButton from '../../utils/components/RoundButton';
import ErrorMessage from '../../utils/components/ErrorMessage';
import StyledLink from '../../utils/components/StyledLink';

function ForgetPassword() {
  const formik = useFormik({
    initialValues: {
      phone: ''
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(
          /^(?:\+20|0)?1[0125]\d{8}$/,
          'Please enter a valid Egyptian phone number'
        )
        .required('Phone number is required')
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
              Forget Password ?
            </h2>
          </Grid>

          <Grid xs={12}>
            <RoundInput
              id="phone"
              name="phone"
              type="tel"
              variant="outlined"
              label="Enter your phone"
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              formProps={formik.getFieldProps('phone')}
            />

            {formik.touched.phone && formik.errors.phone ? (
              <ErrorMessage message={formik.errors.phone} />
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
              text="Send"
              type="submit"
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default ForgetPassword;
