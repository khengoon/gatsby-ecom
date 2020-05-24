import React, { Fragment } from "react"

const Item = ({ title, detail, focus }) => {
  if (detail != null) {
    return (
      <div className="pb-2">
        {!focus && (
          <Fragment>
            <span className="font-weight-bolder">{title} : </span>
            <span>{detail}</span>
          </Fragment>
        )}
        {focus && (
          <Fragment>
            <p className="h5 py-0">{title}</p>
            <p className="py-0">{detail}</p>
          </Fragment>
        )}
      </div>
    )
  } else {
    return null
  }
}

export default Item
