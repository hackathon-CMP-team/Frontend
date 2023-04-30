import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import {signup} from '../../store/features/auth/authActions';

 import * as Yup from 'yup';


function Signup() {
    const dispatch = useDispatch();

    const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },
     validationSchema: Yup.object({
       firstName: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
       lastName: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .required('Required'),
       email: Yup.string().email('Invalid email address').required('Required'),
     }),
     onSubmit: values => {
        dispatch(signup(values))

       alert(JSON.stringify(values, null, 2));
     },
   });
    return (
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
            id="firstName"
            name="firstName"
            type="text"
            {...formik.getFieldProps('firstName')}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
        ) : null}

 
        <label htmlFor="lastName">Last Name</label>
        <input
            id="lastName"
            name="lastName"
            type="text"
            {...formik.getFieldProps('lastName')}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
            id="email"
            name="email"
            type="email"
            {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>) : null}
        <button type="submit">Sign up</button>
     </form>
  )
}

export default Signup;