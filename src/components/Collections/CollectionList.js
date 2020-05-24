import React from "react"
import Collection from "./Collection"

const CollectionList = ({ collections }) => {
  return (
    <section id="collections-table" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Depositor</th>
                  <th scope="col">Purpose</th>
                  <th scope="col">Publication</th>
                </tr>
              </thead>
              <tbody>
                {collections.map(({ node }) => (
                  <Collection key={node.databaseId} node={node} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionList
