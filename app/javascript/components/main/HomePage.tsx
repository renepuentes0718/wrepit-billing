import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Header from './header'
import HeroSection from './heroSection'
import FeaturesSection from './featureSection'
import HowItWorksSection from './howItWorkSection'
import TestimonialsSection from './testimonialsSection'
import ContactSection from './contactSection'
import Support from './support'
import Footer from './footer'

// import { Amplify } from 'aws-amplify'
// import { Authenticator } from '@aws-amplify/ui-react'
// import '@aws-amplify/ui-react/styles.css'
// import awsExports from './aws-exports'
// Amplify.configure({ ...awsExports, ssr: true })
// <Authenticator socialProviders={['google']}>
// </Authenticator>

export default function HomePage(): JSX.Element {
  return (
    <>
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


