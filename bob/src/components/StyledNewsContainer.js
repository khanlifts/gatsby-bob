import styled from "styled-components"

const StyledNewsContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 5rem 5rem 3rem 5rem;
  text-align: left;
  border: 1px solid white;
  border-radius: 5px;
  
  h2 {
    line-height: 1.5;
    text-align: center;
  }
   @media (max-width: 650px) {
   border: none;
   width: 90%;
    h2 {
      font-size: 22px;
      text-align: left;
    }
    p {
      font-size: 14px;
    }
   }
`

export default StyledNewsContainer
