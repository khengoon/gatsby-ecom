import React from "react"
import Item from "./Item"

const Characteristics = ({ charac }) => {
  const {
    biosafetyLevel,
    strainDesignation,
    countryOfOrigin,
    isolationOrigin,
    oxygenRequirement,
    cloningMethod,
    cloningOligonucleotides,
    vectorType,
    vectorBackbone,
    copyNumber,
    species,
    selectableMarker,
    promoter,
    originOfReplication,
    mutation,
    gene,
    expressionHost,
    depositorComment,
    medium,
    growthTemperature,
    termsAndLicences,
  } = charac
  return (
    <section id="characteristics">
      <div>
        <ul>
          <Item title="biosafety level" detail={biosafetyLevel} />
          <Item title="strain designation" detail={strainDesignation} />
          <Item title="country of origin" detail={countryOfOrigin} />
          <Item title="Isolation" detail={isolationOrigin} />
          <Item title="oxygen requirement" detail={oxygenRequirement} />
          <Item title="cloning method" detail={cloningMethod} />
          <Item
            title="cloning oligonucleotides"
            detail={cloningOligonucleotides}
          />
          <Item title="vector type" detail={vectorType} />
          <Item title="vector Backbone" detail={vectorBackbone} />
          <Item title="copy Number" detail={copyNumber} />
          <Item title="species" detail={species} />
          <Item title="selectable Marker" detail={selectableMarker} />
          <Item title="promoter" detail={promoter} />
          <Item title="origin of Replication" detail={originOfReplication} />
          <Item title="mutation" detail={mutation} />
          <Item title="gene" detail={gene} />
          <Item title="expression Host" detail={expressionHost} />
          <Item title="depositor Comment" detail={depositorComment} />
          <Item title="medium" detail={medium} />
          <Item title="growth Temperature" detail={growthTemperature} />
          <Item title="terms And Licences" detail={termsAndLicences} />
        </ul>
      </div>
    </section>
  )
}

export default Characteristics
