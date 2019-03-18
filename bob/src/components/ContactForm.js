import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'
import styled from "styled-components"
import { FaEnvelope,  FaPhone} from 'react-icons/fa'


const StyledWelcomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center; 
  background: white;
  color: black;
  height: 100vh;
  
  .contact-info {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    font-size: 16px;
  }
  
   .contact-info-data {
    display: inline-grid;
    grid-template-columns: 80px calc(100% - 80px);
    margin: 20px 0 20px 0;
  }
  
  .icon {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    font-size: 30px;
    color: #b28564;
    transition: all .3s ease;
    &:hover {
      color: black;
    }
  }
  
  .contact-form {
    display: flex;
    flex-flow: column nowrap;
    align-content: flex-start;
    border-radius: 2px;
    width: 30vw;
  }
  
  .contact-form-info {
    display: flex;
    flex-flow: row nowrap;
    width: 100%
  }
  
 .contact-form-info-name {
   position: relative;
   width: 50%;
 } 
 .contact-form-info-email {
   position: relative;
   left: -1px;
   width: 50%;
 }
 
 .contact-form-message {
    width: 100%;
    height: 100px;
 }
 
 .contact-form-send {
    width: 100%;
    button {
      width: 100%;
    }
 }
  
  input {
    border: 1px solid #b28564;
    border-radius: 3px;
    margin: 0;
    padding: 20px;
    line-height: 25px;
    width: inherit;
  }
  
  textarea {
    border: 1px solid #b28564;
    border-radius: 3px;
    margin: 0;
    padding: 20px;
    line-height: 25px;
    width: calc(100% - 43px);
    position: relative;
  }
 
  input:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  
  
  
  @media (max-width: 550px) {
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
        <div>
          <h2>Direkter Kontakt</h2>
          <div className="contact-info">
            <div className="contact-info-data">
              <span className="icon"><FaEnvelope/></span>
              <span>Schreibt uns auf info@bestofbeerfestival.ch <br/> oder über das Formular auf dieser Seite.</span>
            </div>
            <div className="contact-info-data">
              <span className="icon"><FaPhone/></span>
              <span>Erreiche uns telefonisch unter +41 79 409 58 76</span>
            </div>
          </div>
        </div>
        <div>
          <form className="contact-form">
            <div className="contact-form-info">
              <input type="text" className="contact-form-info-name" placeholder="Name"/>
              <input type="text" className="contact-form-info-email" placeholder="Email"/>
            </div>
            <div className="contact-form-message">
              <textarea placeholder="Nachricht"/>
            </div>
            <div className="contact-form-send">
              <button>Send</button>
            </div>
          </form>
        </div>
      </StyledWelcomeContainer>)
    }
  />
)