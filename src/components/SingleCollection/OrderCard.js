import React from "react"
import { globalContext } from "../../provider"

const OrderCard = ({ databaseId, title, price, productFormat, id }) => {
  return (
    <globalContext.Consumer>
      {context => {
        const { addCart } = context
        return (
          <React.Fragment>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  <strong>Price:</strong> RM{price}.00
                  <p className="small">
                    (Price inclusive of transportation fee)
                  </p>
                  <strong>Product Formant:</strong>
                  <p>{productFormat}</p>
                </p>
                <button
                  onClick={() => addCart(id, title, price)}
                  type="button"
                  className="btn btn-lg btn-outline-success btn-block"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </React.Fragment>
        )
      }}
    </globalContext.Consumer>
  )
}

export default OrderCard
