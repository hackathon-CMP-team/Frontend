import { useFormik } from "formik";
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import {login} from '../../store/features/auth/authActions';



function Login() {
    const dispatch = useDispatch();
    const formik = useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      validationSchema: Yup.object({
        username: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        password: Yup.string()
        .required('Required'),
      }),
      onSubmit: values => {
        dispatch(login(values))
        alert(JSON.stringify(values, null, 2));
      },
   });
    return (
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
            id="username"
            name="username"
            type="text"
            {...formik.getFieldProps('username')}
        />
        {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
        ) : null}

        <label htmlFor="password">Password</label>
        <input
            id="password"
            name="password"
            type="password"
            {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
        ) : null}

        <button type="submit">Login</button>
     </form>
  )
}

export default Login;