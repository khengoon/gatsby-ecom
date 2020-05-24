import React, { useState } from "react"
import { globalContext } from "../../provider"
import CartOrderForm from "./CartOrderForm"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function CartTotals() {
  const [checkOut, setCheckOut] = useState(false)
  return (
    <globalContext.Consumer>
      {context => {
        const { clearCart, subTotal, tax, totals, cart } = context
        return (
          <div className="col text-title text-center my-4">
            <button
              className="btn btn-outline-danger text-capitalize mb-4"
              onClick={() => clearCart()}
            >
              clear cart
            </button>
            <h3>subtotal : RM{subTotal}</h3>
            <h3>tax : RM{tax}</h3>
            <h3>total : RM{totals}</h3>
            <button>
              <AniLink fade to="/checkout">
                To CheckOut Page
              </AniLink>
            </button>
            {cart.length ? (
              <button onClick={() => setCheckOut(true)}>
                Proceed To CheckOut
              </button>
            ) : null}
            {checkOut ? <CartOrderForm cart={cart} /> : null}
          </div>
        )
      }}
    </globalContext.Consumer>
  )
}
