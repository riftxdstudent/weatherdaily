import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = (props) => {
  return (
    <>
        <Navbar />
        {props.children}
    </>
  )
}

export default Layout