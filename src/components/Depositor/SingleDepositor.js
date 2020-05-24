import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FiExternalLink } from "react-icons/fi"

const SingleDepositor = ({ node }) => {
  const { databaseId, title, info, slug, biotypes } = node

  const { description, publication, publicationUrl } = info

  return (
    <tr>
      <th scope="row">{databaseId}</th>
      <td>
        <AniLink to={`collections/${slug}`}>{title}</AniLink>
      </td>
      <td>{description}</td>
      <td>{biotypes.nodes[0].name}</td>
      <td>
        {publication} <a href={publicationUrl}>{FiExternalLink}</a>
      </td>
    </tr>
  )
}

export default SingleDepositor
