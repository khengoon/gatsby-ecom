import React from "react"
import { GiParmecia, GiMushrooms, GiTumor, GiToolbox } from "react-icons/gi"
import CollectionCard from "./CollectionCard"

const CollectionType = () => {
  const size = "2rem"
  return (
    <div className="row py-5">
      <div className="col-md-3">
        <CollectionCard title="Bacteria" size={size}>
          <GiParmecia />
        </CollectionCard>
      </div>
      <div className="col-md-3">
        <CollectionCard title="Fungi / Yeast" size={size}>
          <GiMushrooms />
        </CollectionCard>
      </div>
      <div className="col-md-3">
        <CollectionCard title="Mamalian cell line" size={size}>
          <GiTumor />
        </CollectionCard>
      </div>
      <div className="col-md-3">
        <CollectionCard title="Plasmid" size={size}>
          <GiToolbox />
        </CollectionCard>
      </div>
    </div>
  )
}

export default CollectionType
