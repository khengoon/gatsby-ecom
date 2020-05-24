import React from "react"

const Display = ({ heading, children }) => {
  return (
    <section>
      <div>
        <h5>{heading}</h5>
        <ul>{children}</ul>
      </div>
    </section>
  )
}

export default Display
