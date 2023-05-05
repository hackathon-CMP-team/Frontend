import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../store/features/auth/authActions';
import classes from '../../utils/styles/form.module.css';
import RoundButton from '../../utils/components/RoundButton';
import RoundInput from '../../utils/components/RoundInput';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import PasswordInput from '../../utils/components/PasswordInput';
import { Grid } from '@mui/material';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandler = () => {
    navigate('/auth/signup');
  };

  const formik = useFormik({
    initialValues: {
      phone: '',
      password: ''
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(
          /^(?:\+20|0)?1[0125]\d{8}$/,
          'Please enter a valid Egyptian phone number'
        )
        .required('Phone number is required'),

      password: Yup.string().required('Required')
    }),
    onSubmit: (values) => {
      const res = dispatch(login(values));
      console.log(res);
    }
  });
  return (
    <>
      <form
        className={classes.form}
        onSubmit={formik.handleSubmit}
      >
        <Grid
          container
          justifyContent="center"
        >
          <Grid
            xs={8}
            justifyContent="center"
            container
            rowGap={2}
          >
            <Grid xs={12}>
              <RoundInput
                isFocused
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                variant="outlined"
                label="Phone"
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                formProps={formik.getFieldProps('phone')}
              />

              {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
              ) : null}
            </Grid>
            <Grid xs={12}>
              <PasswordInput
                id="password"
                name="password"
                variant="outlined"
                label="Password"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                formProps={formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </Grid>
            <Grid
              xs={12}
              style={{ textAlign: 'center' }}
            >
              <Link
                className={classes['forget-password--link']}
                to="/auth/forget-password"
              >
                Forget Password ?
              </Link>
            </Grid>
            <Grid xs={12}>
              <RoundButton
                isContained={true}
                type="submit"
                text={'Login'}
              />
            </Grid>
            <Grid xs={12}>
              <RoundButton
                isContained={false}
                text={'Register'}
                type="button"
                onClickHandler={registerHandler}
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Login;
