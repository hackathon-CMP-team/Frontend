import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../store/features/auth/authActions';
import classes from '../../utils/styles/form.module.css';
import { Avatar, Button } from '@mui/material';
import RoundButton from '../../utils/components/RoundButton';
import { TextField } from '@mui/material';
import RoundInput from '../../utils/components/RoundInput';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

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
      //alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <>
      <form
        className={classes.form}
        onSubmit={formik.handleSubmit}
      >
        <RoundInput
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          variant="outlined"
          label="Phone"
          error={Boolean(formik.errors.phone)}
          formProps={formik.getFieldProps('phone')}
        />

        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}

        <RoundInput
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          variant="outlined"
          label="Password"
          error={Boolean(formik.errors.password)}
          formProps={formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}

        <Link
          className={classes['forget-password--link']}
          to="/auth/forget-password"
        >
          Forget Password ?
        </Link>
        <RoundButton
          isContained={true}
          type="submit"
          text={'Login'}
        />
        <RoundButton
          isContained={false}
          text={'Register'}
          onClickHandler={registerHandler}
        />
      </form>
    </>
  );
}

export default Login;
