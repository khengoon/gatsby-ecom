import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Collection from "../components/Home/Collection"

import CollectionTable from "../components/CollectionTable"
import SearchParams from "../components/SearchParams"

export default ({ data }) => (
  <Layout>
    <StyledHero home={true} img={data.file.childImageSharp.fluid}>
      <Banner
        title="A Better Way To Start Experimenting"
        info="Welcome to Malaysia Genetic and Living Culture Collection"
      >
        <AniLink fade to="/cells" className="btn btn-light mr-2" role="button">
          Explore Cells
        </AniLink>
        <AniLink fade to="/plasmids" className="btn btn-light">
          Explore Plasmids
        </AniLink>
      </Banner>
    </StyledHero>

    <SearchParams />
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "homeDefault.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
