import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/features/auth/authActions';
import * as Yup from 'yup';
import PasswordStrengthMeter from '../../utils/components/PasswordStrengthMeter';
import classes from '../../utils/styles/form.module.css';
import ErrorMessage from '../../utils/components/ErrorMessage';

function Signup() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      adult: true
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string()
        .matches(
          /^(?:\+20|0)?1[0125]\d{8}$/,
          'Please enter a valid Egyptian phone number'
        )
        .required('Phone number is required'),
      password: Yup.string()
        .required('Required')
        .min(10, 'Very short password')
        .matches(
          /^(?=.*[!@#$%^&*()\-_=+{}[\]|\s\\;:'",.<>\/?])(?=.*[A-Z])(?=.*\d)(?!.*\s).{10,}$/,
          'Password must contains at least a special char, capital letter and a digit'
        )
    }),
    onSubmit: (values) => {
      dispatch(signup(values));

      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form
      className={classes.form}
      onSubmit={formik.handleSubmit}
    >
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="first name"
          {...formik.getFieldProps('firstName')}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <ErrorMessage message={formik.errors.firstName} />
        ) : null}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="last name"
          {...formik.getFieldProps('lastName')}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <ErrorMessage message={formik.errors.lastName} />
        ) : null}
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage message={formik.errors.email} />
        ) : null}
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          placeholder="phone number"
          type="tel"
          {...formik.getFieldProps('phone')}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <ErrorMessage message={formik.errors.phone} />
        ) : null}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          {...formik.getFieldProps('password')}
        />
        <PasswordStrengthMeter password={formik.values.password} />
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage message={formik.errors.password} />
        ) : null}
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
}

export default Signup;
