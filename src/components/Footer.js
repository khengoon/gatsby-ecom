import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../constants/links"

const Footer = () => (
  <footer id="footer" className="bg-dark py-3 text-white text-center">
    <ul className=" nav justify-content-center ">
      {links.map((item, idx) => {
        return (
          <li key={idx} className="nav-item">
            <AniLink fade to={item.path} className="nav-link text-white">
              {item.text}
            </AniLink>
          </li>
        )
      })}
    </ul>
    <div className="py-3">
      Copyright &copy; National Institutes of Biotechnology
      {new Date().getFullYear()} all rights reserved
    </div>
  </footer>
)

export default Footer
