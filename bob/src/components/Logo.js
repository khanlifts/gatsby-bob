import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from "styled-components"

const StyledLogo = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 35px 40px 10px 35px
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo-bob-full.png" }) {
          childImageSharp {
            fixed(width: 80, height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <StyledLogo>
        <Img fixed={data.file.childImageSharp.fixed}/>
      </StyledLogo>)
    }
  />
)