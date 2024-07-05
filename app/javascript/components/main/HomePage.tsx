import React, { useEffect, useState } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Header from './header'
import HeroSection from './heroSection'
import FeaturesSection from './featureSection'
import HowItWorksSection from './howItWorkSection'
import TestimonialsSection from './testimonialsSection'
import ContactSection from './contactSection'
import Support from './support'
import Footer from './footer'
import { clearUrl, getToken } from '../utils/pathUtil'
import { useMutation } from '@apollo/client'
import { CONFIRM_USER } from '../api/mutations'
import Banner from '../shared/Banner'


// import { Amplify } from 'aws-amplify'
// import { Authenticator } from '@aws-amplify/ui-react'
// import '@aws-amplify/ui-react/styles.css'
// import awsExports from './aws-exports'
// Amplify.configure({ ...awsExports, ssr: true })
// <Authenticator socialProviders={['google']}>
// </Authenticator>

export default function HomePage(): JSX.Element {
  const [message, setMessage] = useState<string>()
  const [severity, setSeverity] = useState(null)
  const [confirmUser] = useMutation(CONFIRM_USER, {
    onCompleted: (data) => {
      if (!!data) {
        setSeverity('success')
        setMessage('Your account has been confirmed, enjoy your WREPIT experience')
      }
    },
    onError: () => {
      setSeverity('error')
      setMessage('Sorry, account confirmation failed, please try again')
    }
  })


  if (getToken()) {
    confirmUser({
      variables: {
        confirmationToken: getToken()
      }
    })
  }

  clearUrl()

  return (
    <>
      {message &&
        <Banner
          severity={severity}
          message={message}
          sx={{ position: 'absolute', top: '11.5%', left: '30%' }}
          withCloseIcon
        />}
      <GlobalStyles />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Support />
      <HowItWorksSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const TokenComponent = () => {
//   const [token, setToken] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const token = params.get('token');
//     setToken(token);
//   }, [location]);

//   return (
//     <div>
//       {token ? <p>Token: {token}</p> : <p>No token found</p>}
//     </div>
//   );
// };

// export default TokenComponent;
