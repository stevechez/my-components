import React, { FC } from 'react'
import Header2 from '../header/Header2'
import Footer1 from '../footer/Footer1'

const Layout: FC<any> = ({ children }) => (
  <>
    <Header2 />
    <main>{children}</main>
    <Footer1 />
  </>
)

export default Layout
