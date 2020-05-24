import React from "react"
import { FaTrash } from "react-icons/fa"

export default function CartItem({ cartItem, removeCart }) {
  const { catID, id, title, price } = cartItem
  return (
    <div className="row mt-5 mt-lg-0 text-center align-items-center">
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">Catalog ID : </span>
        {id}
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">Product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">price : RM</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <span className="text-title text-muted mx-3">1</span>
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <FaTrash
          className="text-danger cart-icon"
          onClick={() => removeCart(id)}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <strong className="text-muted">Item Total : RM{price}</strong>
      </div>
    </div>
  )
}
