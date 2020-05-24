import React from "react"

const CartOrderForm = ({ cart }) => {
  return (
    <section id="order-form" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Ordering Form</h2>
            <p>Please provide us the following information</p>
          </div>
        </div>
        <form
          name="OrderForm"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="OrderForm" />
          {/* Contact */}
          <div className="none">
            <input
              className="d-none"
              type="textarea"
              name="order"
              value={JSON.stringify(cart, null, 2)}
            />
          </div>
          {/* <h4>Order Details:</h4>
          {cart.map((item, idx) => {
            return (
              <div className="form-group row" key={idx}>
                <label
                  className="col-sm-2 col-form-label"
                  htmlFor={`item-${idx + 1}`}
                >
                  Item {idx + 1}:{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    name={`item-${idx + 1}`}
                    id={`item-${idx + 1}`}
                    value={item.title}
                  />
                </div>
              </div>
            )
          })} */}

          <h4>Contact Info:</h4>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Ali AhKau Muthu"
              required
            />
            <small id="emailhelp" className="form-text text-muted">
              This name will be shown in quotation.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Contact Number</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              id="phone"
              placeholder="012-3456789"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="email@email.com"
              required
            />
            <small id="emailhelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          {/* Organization  */}
          <h4>Organization Info:</h4>
          <div className="form-group">
            <label htmlFor="PI">Name</label>
            <input
              type="text"
              className="form-control"
              name="pi"
              id="PI"
              placeholder="Laboratory Head / Principle Investigator"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="instituteUrl">Name</label>
            <input
              type="url"
              className="form-control"
              name="instituteUrl"
              id="instituteUrl"
              placeholder="Organization Web Address"
            />
          </div>
          {/* Billing */}
          <h4>Billing Address: </h4>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              name="address"
              id="inputAddress"
              placeholder="1234 Main St"
              required
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              class="form-control"
              name="address2"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default CartOrderForm
