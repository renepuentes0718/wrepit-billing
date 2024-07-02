import * as Yup from 'yup'

export const SignUpSchema =
  Yup.object().shape({
    firstName: Yup.string().max(255).required('First Name is required'),
    lastName: Yup.string().max(255).required('Last Name is required'),
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup.string().max(255).required('Password is required'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords mismatch')
  })

export const UserUpdateSchema =
  Yup.object().shape({
    firstName: Yup.string().max(255).required('First Name is required'),
    lastName: Yup.string().max(255).required('Last Name is required'),
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
  })

export const LoginSchema =
  Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup.string().max(255).required('Password is required'),
  })


export const ResetPasswordSchema =
  Yup.object().shape({
    password: Yup.string().max(255).required('Password is required'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must mismatch')
  })


export const forgotPasswordSchema =
  Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
  })
