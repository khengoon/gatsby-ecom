import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { IconContext } from "react-icons"
import { GiParmecia, GiMushrooms, GiTumor, GiToolbox } from "react-icons/gi"
import CollectionType from "../CollectionType"
import CollectionApplication from "../CollectionApplication"

const Collection = () => (
  <section id="collection-type" className="py-5 bg-light text-center">
    <div className="container">
      <div className="row">
        <div className="col mx-auto mb-3">
          <h2 className="display-4">Our Collections</h2>
        </div>
      </div>
      <CollectionType />
      <CollectionApplication />
    </div>
  </section>
)

export default Collection
