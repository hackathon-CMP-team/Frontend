import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../../utils/components/ErrorMessage';
import { useState } from 'react';
import RoundInput from '../../utils/components/RoundInput';
import RoundButton from '../../utils/components/RoundButton';
import { Alert, Grid } from '@mui/material';
import childLogo from '../../assets/images/child.png';
import adultLogo from '../../assets/images/person.png';
import Avatar from '@mui/material/Avatar';
import StyledLink from '../../utils/components/StyledLink';
import { useNavigate } from 'react-router';

function Signup1() {
  const [isAdult, setIsAdult] = useState(true);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      parentPhone: '',
      isAdult
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),

      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),

      phone: Yup.string()
        .matches(
          /^(?:\+20|0)?1[0125]\d{8}$/,
          'Please enter a valid Egyptian phone number'
        )
        .required('Phone number is required'),

      parentPhone: Yup.string().when('isAdult', {
        is: false,
        then: Yup.string()
          .required('Required')
          .matches(
            /^(?:\+20|0)?1[0125]\d{8}$/,
            'Please enter a valid Egyptian phone number'
          )
      })
    }),
    onSubmit: async (values) => {
      navigate('/auth/signup2', { state: values });
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
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
          rowGap={2}
        >
          <Grid
            xs={12}
            columnGap={1}
          >
            <RoundInput
              id="firstName"
              name="firstName"
              type="text"
              label="first name"
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              formProps={formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <ErrorMessage message={formik.errors.firstName} />
            ) : null}
          </Grid>
          <Grid xs={12}>
            <RoundInput
              id="lastName"
              name="lastName"
              type="text"
              label="last name"
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              formProps={formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <ErrorMessage message={formik.errors.lastName} />
            ) : null}
          </Grid>
          <Grid xs={12}>
            <RoundInput
              id="phone"
              name="phone"
              label="Phone Number"
              type="tel"
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              formProps={formik.getFieldProps('phone')}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <ErrorMessage message={formik.errors.phone} />
            ) : null}
          </Grid>
          {isAdult ? null : (
            <Grid xs={12}>
              <RoundInput
                id="parentPhone"
                name="parentPhone"
                label="Parent Phone Number"
                type="tel"
                error={
                  formik.touched.parentPhone &&
                  Boolean(formik.errors.parentPhone)
                }
                formProps={formik.getFieldProps('parentPhone')}
              />
              {formik.touched.parentPhone && formik.errors.parentPhone ? (
                <ErrorMessage message={formik.errors.parentPhone} />
              ) : null}
            </Grid>
          )}

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
              isContained
              type="submit"
              text="Continue"
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default Signup1;

/**
 * 
 * <Grid xs={12}>
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

 */
