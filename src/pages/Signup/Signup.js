import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/features/auth/authActions';
import * as Yup from 'yup';
import PasswordStrengthMeter from '../../utils/components/PasswordStrengthMeter';
import classes from '../../utils/styles/form.module.css';
import ErrorMessage from '../../utils/components/ErrorMessage';
import { useState } from 'react';
import RoundInput from '../../utils/components/RoundInput';
import RoundButton from '../../utils/components/RoundButton';
import { Grid } from '@mui/material';
import childLogo from '../../assets/images/child.png';
import adultLogo from '../../assets/images/person.png';
import Avatar from '@mui/material/Avatar';

function Signup() {
  const dispatch = useDispatch();
  const [isAdult, setIsAdult] = useState(true);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confPassword: '',
      phone: '',
      adult: isAdult
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
      //className={classes.form}
      onSubmit={formik.handleSubmit}
    >
      <Grid
        container
        justifyContent="center"
      >
        <Grid
          item
          xs={8}
          justifyContent="center"
        >
          <Grid
            container
            xs={12}
            sx={{ marginBottom: '2rem' }}
          >
            <Grid
              display="flex"
              xs={6}
              item
              justifyContent="flex-end"
              alignItems="center"
            >
              <Avatar
                sx={{
                  width: isAdult ? 30 : 48,
                  height: isAdult ? 30 : 48,
                  transition: 'all 0.2s'
                }}
                src={childLogo}
                onClick={() => setIsAdult(false)}
              />
            </Grid>
            <Grid
              display="flex"
              item
              xs={6}
              alignItems="center"
            >
              <Avatar
                sx={{
                  width: isAdult ? 48 : 30,
                  height: isAdult ? 48 : 30,
                  transition: 'all 0.2s'
                }}
                src={adultLogo}
                onClick={() => setIsAdult(true)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={8}
          justifyContent="center"
          gap={2}
        >
          <Grid
            xs={12}
            container
            columnGap={1}
          >
            <Grid xs={5.5}>
              <RoundInput
                isFocused
                id="firstName"
                name="firstName"
                type="text"
                label="first name"
                width={100}
                error={Boolean(formik.errors.firstName)}
                formProps={formik.getFieldProps('firstName')}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <ErrorMessage message={formik.errors.firstName} />
              ) : null}
            </Grid>
            <Grid xs={5.5}>
              <RoundInput
                id="lastName"
                name="lastName"
                type="text"
                label="last name"
                width={100}
                error={Boolean(formik.errors.lastName)}
                formProps={formik.getFieldProps('lastName')}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <ErrorMessage message={formik.errors.lastName} />
              ) : null}
            </Grid>
          </Grid>

          <Grid xs={12}>
            <RoundInput
              id="email"
              name="email"
              type="email"
              label="Email"
              width={100}
              error={Boolean(formik.errors.email)}
              formProps={formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorMessage message={formik.errors.email} />
            ) : null}
          </Grid>
          <Grid xs={12}>
            <RoundInput
              width={100}
              id="phone"
              name="phone"
              label="Phone Number"
              type="tel"
              error={Boolean(formik.errors.phone)}
              formProps={formik.getFieldProps('phone')}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <ErrorMessage message={formik.errors.phone} />
            ) : null}
          </Grid>
          <Grid xs={12}>
            <RoundInput
              width={100}
              id="password"
              name="password"
              type="password"
              label="Password"
              formProps={formik.getFieldProps('password')}
            />
            <PasswordStrengthMeter password={formik.values.password} />
            {formik.touched.password && formik.errors.password ? (
              <ErrorMessage message={formik.errors.password} />
            ) : null}
          </Grid>
          <Grid xs={12}>
            <RoundInput
              width={100}
              id="conf-password"
              name="conf-password"
              type="password"
              label="Confirm Password"
              formProps={formik.getFieldProps('confPassword')}
            />
            {formik.touched.confPassword && formik.errors.confPassword ? (
              <ErrorMessage message={formik.errors.confPassword} />
            ) : null}
          </Grid>
        </Grid>
      </Grid>
      {/* <div
  //       style={{
  //         display: 'flex',
  //         gap: '1rem'
  //       }}
  //     >
  //       <div>
  //         <RoundInput
  //           isFocused
  //           id="firstName"
  //           name="firstName"
  //           type="text"
  //           label="first name"
  //           width={100}
  //           error={Boolean(formik.errors.firstName)}
  //           formProps={formik.getFieldProps('firstName')}
  //         />
  //         {formik.touched.firstName && formik.errors.firstName ? (
  //           <ErrorMessage message={formik.errors.firstName} />
  //         ) : null}
  //       </div>
  //       <div>
  //         <RoundInput
  //           id="lastName"
  //           name="lastName"
  //           type="text"
  //           label="last name"
  //           width={100}
  //           error={Boolean(formik.errors.lastName)}
  //           formProps={formik.getFieldProps('lastName')}
  //         />
  //         {formik.touched.lastName && formik.errors.lastName ? (
  //           <ErrorMessage message={formik.errors.lastName} />
  //         ) : null}
  //       </div>
  //     </div>
  //     <div style={{ width: '100%' }}>
  //       <RoundInput
  //         id="email"
  //         name="email"
  //         type="email"
  //         label="Email"
  //         width={100}
  //         error={Boolean(formik.errors.email)}
  //         formProps={formik.getFieldProps('email')}
  //       />
  //       {formik.touched.email && formik.errors.email ? (
  //         <ErrorMessage message={formik.errors.email} />
  //       ) : null}
  //     </div>
  //     <div style={{ width: '100%' }}>
  //       <RoundInput
  //         width={100}
  //         id="phone"
  //         name="phone"
  //         label="Phone Number"
  //         type="tel"
  //         error={Boolean(formik.errors.phone)}
  //         formProps={formik.getFieldProps('phone')}
  //       />
  //       {formik.touched.phone && formik.errors.phone ? (
  //         <ErrorMessage message={formik.errors.phone} />
  //       ) : null}
  //     </div>
  //     <div style={{ width: '100%' }}>
  //       <RoundInput
  //         width={100}
  //         id="password"
  //         name="password"
  //         type="password"
  //         label="Password"
  //         formProps={formik.getFieldProps('password')}
  //       />
  //       <PasswordStrengthMeter password={formik.values.password} />
  //       {formik.touched.password && formik.errors.password ? (
  //         <ErrorMessage message={formik.errors.password} />
  //       ) : null}
  //     </div>
  //     <div style={{ width: '100%' }}>
  //       <RoundInput
  //         width={100}
  //         id="conf-password"
  //         name="conf-password"
  //         type="conf-password"
  //         label="Confirm Password"
  //         formProps={formik.getFieldProps('confPassword')}
  //       />
  //       {formik.touched.confPassword && formik.errors.confPassword ? (
  //         <ErrorMessage message={formik.errors.confPassword} />
  //       ) : null}
  //     </div>
  //     <RoundButton
  //       isContained
  //       type="submit"
  //       text={'Sign up'}
  //     /> */}
    </form>
  );
  return (
    <Grid
      container
      sx={{
        backgroundColor: '#000'
      }}
      justifyContent="center"
    >
      <Grid
        item
        sx={{ backgroundColor: '#f00' }}
        xs={8}
      >
        child
      </Grid>
      <Grid
        item
        container
        sx={{ backgroundColor: '#f00' }}
        xs={8}
        justifyContent="center"
        gap={2}
      >
        <Grid
          xs={12}
          container
        >
          <Grid
            sx={{ backgroundColor: '#0F0' }}
            xs={6}
          >
            left
          </Grid>
          <Grid
            sx={{ backgroundColor: '#00F' }}
            xs={6}
          >
            right
          </Grid>
        </Grid>

        <Grid
          sx={{ backgroundColor: '#0FF' }}
          xs={12}
        >
          item3
        </Grid>
        <Grid
          sx={{ backgroundColor: '#0FF' }}
          xs={12}
        >
          item4
        </Grid>
        <Grid
          sx={{ backgroundColor: '#0FF' }}
          xs={12}
        >
          item5
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Signup;
