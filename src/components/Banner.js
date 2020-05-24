import React from "react"

const Banner = ({ title, info, children }) => (
  <div className="container text-white text-center">
    <div className="row">
      <div className="col">
        <h2 className="display-4">{title}</h2>
        <p className="lead my-4">{info}</p>
        {children}
      </div>
    </div>
  </div>
)

export default Banner
