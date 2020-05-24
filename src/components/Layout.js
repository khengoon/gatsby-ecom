import React from "react"
import { globalContext } from "../provider"

import Navbar from "./Navbar"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <globalContext.Consumer>
      {context => {
        const { cart } = context
        return (
          <React.Fragment>
            <main>
              <Navbar cart={cart} />
              {children}
              <Footer />
            </main>
          </React.Fragment>
        )
      }}
    </globalContext.Consumer>
  )
}

export default Layout
