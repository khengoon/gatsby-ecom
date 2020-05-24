import React from "react"
import Layout from "../components/Layout"
import Collections from "../components/Collections/Collections"

const collections = () => {
  return (
    <Layout>
      <section id="collections-header" className="py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <h2 className="display-3">Our Collections</h2>
              <p className="lead">Browse our collections</p>
            </div>
          </div>
        </div>
      </section>
      <Collections />
    </Layout>
  )
}

export default collections
