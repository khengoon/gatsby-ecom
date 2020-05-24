import React from "react"
import { globalContext } from "../../provider"
import CartItem from "./CartItem"

export default function CartList() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <globalContext.Consumer>
            {context => {
              const { cart, removeCart } = context
              if (cart.length === 0) {
                return (
                  <h2 className="h1 text-title text-center my-4">
                    your cart is empty
                  </h2>
                )
              } else {
                return (
                  <>
                    {cart.map(item => (
                      <CartItem
                        key={item.id}
                        cartItem={item}
                        removeCart={removeCart}
                      />
                    ))}
                  </>
                )
              }
            }}
          </globalContext.Consumer>
        </div>
      </div>
    </div>
  )
}
