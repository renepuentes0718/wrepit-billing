import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import EyeOutlined from '@ant-design/icons/EyeOutlined'
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined'
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  IconButton,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Box,
} from '@mui/material'
import { strengthColor, strengthIndicator } from '../utils/passwordStrength'
import { ResetPasswordSchema } from '../schema'


const initialValues = {
  password: '',
  PasswordConfirmation: ''
}

export default function ResetPasswordForm(): JSX.Element {
  const [level, setLevel] = useState({ color: '', label: '' })
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const changePassword = (value) => {
    const temp = strengthIndicator(value)
    setLevel(strengthColor(temp))
  }

  const changePasswordConfirmation = (value) => {
    console.log(value)
  }

  const handleSubmit = (event) => {

  }

  useEffect(() => {
    changePassword('')
  }, [])

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={ResetPasswordSchema}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor='password-Reset'>Password</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  id='passwordReset'
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  name='password'
                  onBlur={handleBlur}
                  placeholder='Enter password'
                  onChange={(e) => {
                    handleChange(e)
                    changePassword(e.target.value)
                  }}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                        color='secondary'
                      >
                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Stack>
              {values.password && (
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <Grid container spacing={2} alignItems='center'>
                    <Grid item>
                      <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant='subtitle1' fontSize='0.75rem'>
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </FormControl>
              )}
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor='password-confirmation'>Comfirm Password</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.passwordConfirmation && errors.passwordConfirmation)}
                  id='passwordConfirmation'
                  type={showPassword ? 'text' : 'password'}
                  value={values.passwordConfirmation}
                  name='passwordConfirmation'
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e)
                    changePasswordConfirmation(e.target.value)
                  }}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                        color='secondary'
                      >
                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder='Enter password'
                />
              </Stack>
              {touched.passwordConfirmation && typeof errors.passwordConfirmation === 'string' && (
                <FormHelperText error id='helper-text-password-signup'>
                  {errors.passwordConfirmation}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                disableElevation
                disabled={isSubmitting}
                fullWidth
                size='large'
                type='submit'
                variant='contained'
                sx={{
                  color: '#5bbff1'
                }}
              >
                Reset Password
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  )
}
