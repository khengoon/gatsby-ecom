import React from "react"
import CollectionList from "./CollectionList"
import { useStaticQuery, graphql } from "gatsby"

const getCollections = graphql`
  query {
    wpgraphql {
      collections {
        edges {
          node {
            info {
              publication
              publicationUrl
              description
            }
            title
            slug
            databaseId
            biotypes {
              nodes {
                name
                id
                slug
              }
            }
            applications {
              nodes {
                name
                id
                slug
              }
            }
            depositors {
              nodes {
                name
                slug
                id
              }
            }
          }
        }
      }
    }
  }
`

const Collections = () => {
  const data = useStaticQuery(getCollections)
  const collections = data.wpgraphql.collections.edges

  return <CollectionList collections={collections} />
}

export default Collections
