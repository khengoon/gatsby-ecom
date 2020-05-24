import React from "react"
import Item from "./Item"

const GeneralDetails = ({ general }) => {
  const {
    description,
    publication,
    publicationUrl,
    verification,
    sequencingOligonucleotides,
  } = general
  return (
    <section id="general-details">
      <div>
        <ul>
          <Item title="purpose" detail={description} />
          <Item title="publication" detail={publication} />
          <Item title="verification" detail={verification} />
          <Item title="Sequencing" detail={sequencingOligonucleotides} />
        </ul>
      </div>
    </section>
  )
}

export default GeneralDetails
