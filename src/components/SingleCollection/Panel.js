import React from "react"
import Display from "./Display"
import Item from "./Item"
import ItemWithLink from "./ItemWithLink"
import ItemWithCategoryList from "./ItemWithCategoryList"

import { GiParmecia, GiMushrooms, GiTumor, GiToolbox } from "react-icons/gi"
import { IconContext } from "react-icons"

const Panel = ({ info, biotypes, applications, depositors }) => {
  const {
    // general
    biologicalType,
    description,
    publication,
    publicationUrl,
    verification,
    sequencingOligonucleotides,
    // cell
    biosafetyLevel,
    strainDesignation,
    countryOfOrigin,
    isolationOrigin,
    oxygenRequirement,
    // plasmid
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
    // both
    depositorComment,
    medium,
    growthTemperature,
    termsAndLicences,
    // side panel
    productFormat,
    price,
  } = info

  return (
    <section id="panel">
      <div className="row" id="panel-header">
        <div className="col-md-6">
          <Display>
            <Item title="Purpose" detail={description} focus />
            <Item title="Verification" detail={verification} focus />
            <Item
              title="Sequencing"
              detail={sequencingOligonucleotides}
              focus
            />
          </Display>
        </div>
        <div className="col-md-6">
          <Display>
            {/* Depositor and Publication */}
            <ItemWithLink
              title="Publication"
              detail={publication}
              link={publicationUrl}
              external={true}
            />
            <ItemWithCategoryList title="Depositor" detail={depositors} focus />

            <ItemWithCategoryList
              title="Application"
              detail={applications}
              focus
            />
          </Display>
        </div>
      </div>
      <div className="row text-center mx-auto">
        <div className="col pb-3">
          <h4>Characteristics</h4>
        </div>
      </div>
      <div className="row" id="panel-info">
        <div className="col-md-6" id="panel-info-left">
          <Display>
            {/* Cell */}
            <Item title="Isolation origin" detail={isolationOrigin} />
            <Item title="oxygen requirement" detail={oxygenRequirement} />
            <Item title="Country" detail={countryOfOrigin} />
            <Item title="strain designation" detail={strainDesignation} />
            <Item title="biosafety Level" detail={biosafetyLevel} />
            {/* Plasmid vector */}
            <Item title="vector Backbone" detail={vectorBackbone} />
            <Item title="vector Type" detail={vectorType} />
            <Item title="selectable Marker" detail={selectableMarker} />
            <Item title="copy Number" detail={copyNumber} />
            <Item title="origin Of Replication" detail={originOfReplication} />
            <Item title="expression Host" detail={expressionHost} />

            {/* Cell and Plasmid */}
          </Display>
        </div>
        <div className="col-md-6">
          {/* Plasmid insert */}
          <Item title="cloning Method" detail={cloningMethod} />
          <Item
            title="cloning Oligonucleotides"
            detail={cloningOligonucleotides}
          />
          <Item title="species" detail={species} />
          <Item title="promoter" detail={promoter} />
          <Item title="mutation" detail={mutation} />
          <Item title="gene" detail={gene} />
          {/* Both */}
          <Item title="Medium" detail={medium} />
          <Item
            title="Growth Temperature, &#8451;"
            detail={growthTemperature}
          />
          <Item title="depositor Comment" detail={depositorComment} />
          <Item title="termsAndLicences" detail={termsAndLicences} />
        </div>
      </div>
      {/* <pre>{JSON.stringify(info, null, 2)}</pre> */}
      <pre>{JSON.stringify(applications.nodes, null, 2)}</pre>
      {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(applications, null, 2)}</pre> */}
    </section>
  )
}

export default Panel
