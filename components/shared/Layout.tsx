import React, { FC } from 'react'
import Header4 from '../header/Header4'
import Footer8 from '../footer/Footer8'

const Layout: FC<any> = ({ children }) => (
  <>
    <Header4 />
    <main>{children}</main>
    <Footer8 />
  </>
)

export default Layout
