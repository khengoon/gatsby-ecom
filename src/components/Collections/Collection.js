import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FiExternalLink } from "react-icons/fi"

const Collection = ({ node }) => {
  // find object in an array which has __typename of depositor
  // const depositor = node.terms.find(
  //   obj => obj.__typename === "WPGraphQL_Depositor"
  // )
  console.log(node)
  const {
    title,
    databaseId,
    slug,
    info,
    biotypes,
    applications,
    depositors,
  } = node
  // only fetch the first depositor
  const depositorName = depositors.nodes[0].name
  const depositorSlug = depositors.nodes[0].slug

  const applicationList = applications.nodes
  const { description, publication, publicationUrl } = info

  return (
    <tr>
      <th scope="row">{databaseId}</th>
      <td>
        <AniLink to={`collections/${slug}`}>{title}</AniLink>
      </td>
      <td>
        <AniLink to={`depositors/${depositorSlug}`}>{depositorName}</AniLink>
      </td>
      <td>{description}</td>
      <td>
        {publication} <a href={publicationUrl}>{FiExternalLink}</a>
      </td>
    </tr>
  )
}

export default Collection
