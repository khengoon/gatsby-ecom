import React from "react"
import Layout from "../components/Layout"
import CartColumns from "../components/Cart/CartColumns"
import CartList from "../components/Cart/CartList"
import CartTotals from "../components/Cart/CartTotals"

const Cart = () => {
  return (
    <Layout>
      <section id="cart-page" className="py-5">
        <div className="container">
          <h2 className="text-center">Your Cart Items</h2>
        </div>
        <CartColumns />
        <CartList />
        <CartTotals />
      </section>
    </Layout>
  )
}

export default Cart
