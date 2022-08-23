import React from 'react'
import Header from '../../layout/Header/Header'
import Banner from '../../components/landing/banner/Banner'
import WelcomeAlpha from '../../components/landing/welcomeAlpha/WelcomeAlpha'
import Partners from '../../components/landing/partners/Partners'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../layout/Footer/Footer'

const Home = () => {
  return (
    <>
    <Header />
    <Banner />
    <WelcomeAlpha />
    <Partners />
    <Subscribe />
    <Footer />
    </>
  )
}

export default Home