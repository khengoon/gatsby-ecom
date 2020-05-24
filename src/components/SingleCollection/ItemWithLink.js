import React, { Fragment } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ItemWithLink = ({ title, detail, link, external, focus, children }) => {
  if (detail != null) {
    return (
      <div className="pb-2">
        {!focus && (
          <Fragment>
            <span className="font-weight-bolder">{title} : </span>
            <AniLink to={`/${link}`}>{detail}</AniLink>
          </Fragment>
        )}
        {focus && (
          <Fragment>
            <p className="h5 py-0">{title}</p>
            <p className="py-0">
              {external ? (
                <a href={link}>{detail}</a>
              ) : (
                <AniLink to={`/${link}`}>{detail}</AniLink>
              )}
            </p>
            {children}
          </Fragment>
        )}
      </div>
    )
  } else {
    return null
  }
}

export default ItemWithLink
