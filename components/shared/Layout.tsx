import React, { FC } from 'react'
import Header2 from '../header/Header2'
import Footer8 from '../footer/Footer8'

const Layout: FC<any> = ({ children }) => (
  <>
    <Header2 />
    <main>{children}</main>
    <Footer8 />
  </>
)

export default Layout
