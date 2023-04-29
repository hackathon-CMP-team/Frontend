import { useFormik } from 'formik';
import React from 'react'

function Signup() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        }
    });
    return (
    <form></form>
  )
}

export default Signup;