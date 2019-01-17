import React from "react"
import { StaticQuery, graphql } from "gatsby"

import StyledImpressionsContainer from './StyledImpressionsContainer'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "bars.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 450, maxHeight: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <StyledImpressionsContainer>
        <div className="intro__image">
          <Img fluid={data.fileName.childImageSharp.fluid} />
        </div>
      </StyledImpressionsContainer>)
    }
  />
)