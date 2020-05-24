import React from "react"
import { IconContext } from "react-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const CollectionCard = ({ children, title }) => (
  <div className="card">
    <div className="card-body text-center">
      <IconContext.Provider value={{ size: "9rem" }}>
        <div>{children}</div>
      </IconContext.Provider>
    </div>
    <div className="card-footer">
      <h5>{title}</h5>
    </div>
  </div>
)

export default CollectionCard
