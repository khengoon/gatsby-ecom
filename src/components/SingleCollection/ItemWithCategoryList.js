import React, { Fragment } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ItemWithCategoryList = ({ title, detail, focus }) => {
  // check if entry is not empty. If empty do nothing
  if (detail != null) {
    let category = "applications"
    if (title.length < 11) {
      category = "depositors"
    }
    return (
      <div className="pb-2">
        {!focus && (
          <>
            <span className="font-weight-bolder">{title} : </span>
          </>
        )}
        {focus && (
          <>
            <p className="h5 py-0">{title}</p>
          </>
        )}
        {detail.nodes.map((item, idx) => (
          <div>
            <AniLink key={idx} to={`${category}/${item.slug}`}>
              {item.name}
            </AniLink>
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default ItemWithCategoryList
