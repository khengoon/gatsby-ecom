import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight, FaCartPlus } from "react-icons/fa"
import links from "../constants/links"

const Navbar = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleOpen = () => {
    console.log(isOpen)
    setIsOpen(isOpen => !isOpen)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <AniLink fade to="/" className="navbar-brand">
          MGLCC
        </AniLink>
        <AniLink fade to="/cart" className="nav-cart">
          <FaCartPlus />
          <div className="cart-items">{cart.length}</div>
        </AniLink>
        <button
          className={
            isOpen
              ? "navbar-toggler navbar-toggler-right collapsed"
              : "navbar-toggler navbar-toggler-right"
          }
          type="button"
          onClick={toggleOpen}
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaAlignRight />
        </button>
        <div
          className={
            isOpen
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse show"
          }
        >
          <ul className="navbar-nav ml-auto">
            {links.map((item, idx) => (
              <li key={idx} className="nav-item">
                <AniLink fade to={item.path} className="nav-link">
                  {item.text}
                </AniLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
