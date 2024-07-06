import React, { SetStateAction, useState } from 'react'
import { Formik, useFormikContext } from 'formik'
import {
  Button,
  FormHelperText,
  Grid,
  Stack,
  TextField,
} from '@mui/material'
import Banner from '../shared/Banner'
import { useMutation } from '@apollo/client'
import { VERIFY_CODE } from '../api/mutations'
import { User } from '../interface'
import { PhoneNumberVerificationSchema } from '../schema'

const initialValues = {
  code: ''
}

export default function VerifyPhoneNumberForm(): JSX.Element {
  const [message, setMessage] = useState<string>('')
  const [severity, setSeverity] = useState(null)
  const [verifyCode, { loading }] = useMutation(VERIFY_CODE, {
    onCompleted: (data) => {
      if (!!data) {
        setSeverity('success')
        setMessage('Phone verification was successful')
      }
    },
    onError: () => {
      setSeverity('error')
      setMessage('Sorry, phone verification was unsuccessful')
    }
  })

  const handleSubmit = (event) => {
    verifyCode({ variables: { email: event.code } })
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={PhoneNumberVerificationSchema}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, touched, values, setFieldValue }) => (
        <>
          {message && <Banner severity={severity} message={message} />}
          <br />
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <TextField
                    id='code'
                    type='number'
                    value={values.email}
                    name='code'
                    placeholder='123456'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    error={Boolean(touched.code && errors.code)}
                  />
                </Stack>
                {touched.code && typeof errors.code === 'string' && (
                  <FormHelperText error id='standard-weight-helper-code'>
                    {errors.code}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Button
                  disableElevation
                  disabled={loading}
                  fullWidth
                  size='large'
                  type='submit'
                  variant='contained'
                  sx={{
                    background: '#5bbff1',
                    color: '#FFF'
                  }}
                >
                  Verify phone number
                </Button>
              </Grid>
            </Grid>
          </form>
        </>
      )}
    </Formik>
  )
}