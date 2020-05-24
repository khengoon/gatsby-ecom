import React from "react"
import {
  GiHealthCapsule,
  GiPlantsAndAnimals,
  GiPlanetCore,
} from "react-icons/gi"
import { FaIndustry } from "react-icons/fa"
import CollectionCard from "./CollectionCard"

const CollectionApplication = () => (
  <div className="row py-5">
    <div className="col-md-3">
      <CollectionCard title="Health and Pharmaceutical">
        <GiHealthCapsule />
      </CollectionCard>
    </div>
    <div className="col-md-3">
      <CollectionCard title="Bioindustry">
        <FaIndustry />
      </CollectionCard>
    </div>
    <div className="col-md-3">
      <CollectionCard title="Animal and agriculture">
        <GiPlantsAndAnimals />
      </CollectionCard>
    </div>
    <div className="col-md-3">
      <CollectionCard title="Energy and Environment">
        <GiPlanetCore />
      </CollectionCard>
    </div>
  </div>
)

export default CollectionApplication
