import React, { useState, useEffect } from "react"

export const globalContext = React.createContext()

const Provider = props => {
  const TAX = 0
  const [cart, setCart] = useState([])
  const [subTotal, setSubTotal] = useState(0)
  const [tax, setTax] = useState(0)
  const [totals, setTotals] = useState(0)

  const getStorageCart = () => {
    let cart
    if (window.localStorage.getItem("cart")) {
      cart = JSON.parse(window.localStorage.getItem("cart"))
    } else {
      cart = []
    }
    setCart(cart)
  }

  const addToCart = (id, title, price) => {
    // check if item is in cart

    let tempCart = [...cart]
    let tempItem = tempCart.find(item => item.id === id)
    if (!tempItem) {
      let cartItem = { id: id, title: title, count: 1, price: price }
      tempCart = [...tempCart, cartItem]
    }
    setCart(tempCart)
  }
  const removeItem = id => {
    let tempCart = [...cart]
    tempCart = tempCart.filter(item => item.id !== id)
    setCart(tempCart)
  }
  const syncStorage = () => {
    window.localStorage.setItem("cart", JSON.stringify(cart))
  }
  const clearCart = () => {
    setCart([])
  }

  const calculateCart = () => {
    let subTotal = 0
    let totals = 0
    cart.forEach(item => {
      subTotal += item.price
    })

    subTotal = parseFloat(subTotal.toFixed(2))
    setSubTotal(subTotal)

    let tax = subTotal * TAX
    setTax(tax)

    totals = subTotal + tax
    setTotals(totals)
  }
  useEffect(() => {
    getStorageCart()
  }, [])

  useEffect(() => {
    syncStorage()
    calculateCart()
  }, [cart])

  return (
    <globalContext.Provider
      value={{
        cart,
        addCart: (id, title, price) => addToCart(id, title, price),
        removeCart: id => removeItem(id),
        clearCart: () => clearCart(),
        subTotal,
        tax,
        totals,
      }}
    >
      {props.children}
    </globalContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
