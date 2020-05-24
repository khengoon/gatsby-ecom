import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const getImage = graphql`
  query {
    file(relativePath: { eq: "mglcc-about-us.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(getImage)

  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row text-center py-3">
          <div className="col-md-6 mx-auto">
            <h2 className="display-4">About Us</h2>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-6">
            <Img fluid={data.file.childImageSharp.fluid} alt="about mglcc" />
          </div>
          <div className="col-md-6 py-3">
            <article>
              <h3 className="h2">Exploring possibilities, together</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
                doloribus enim necessitatibus?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat accusantium asperiores magnam officia corrupti
                praesentium ipsam temporibus labore sequi excepturi, itaque
                veritatis harum, suscipit voluptatibus.
              </p>
              <button type="button" className="btn btn-primary">
                Read More
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
