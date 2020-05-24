import React from "react"
import Layout from "../components/Layout"
import CartOrderForm from "../components/Cart/CartOrderForm"
import { globalContext } from "../provider"

const CheckOut = () => {
  return (
    <globalContext.Consumer>
      {context => {
        const { cart } = context
        return <CartOrderForm cart={cart} />
      }}
    </globalContext.Consumer>
  )
}

export default CheckOut
