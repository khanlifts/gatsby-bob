import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from "styled-components"

const StyledWelcomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 60%;
  margin: 0 auto;
  padding: 5rem 0 8rem 0;
  h1 {
    margin-bottom: 3rem;
  }
  
  @media (max-width: 550px) {
    padding: 2rem 0 0 0;
    .container__right {
      display: none;
    }
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            subtitle
          }
        }
        file(relativePath: { eq: "logo-bob-full.png" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <StyledWelcomeContainer>
        <div className="container__left">
          <h1>{data.site.siteMetadata.subtitle}</h1>
        </div>
        <div className="container__right">
          <Img fixed={data.file.childImageSharp.fixed}/>
        </div>
      </StyledWelcomeContainer>)
    }
  />
)