import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 to-blue-500 text-white'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout