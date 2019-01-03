import styled from "styled-components"

const StyledNewsContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 5rem 5rem 3rem 5rem;
  text-align: center;
  border: 1px solid white;
  border-radius: 5px;
  
  h2 {
    line-height: 1.5;
  }
   @media (max-width: 650px) {
   border: none;
   width: 90%;
   text-align: left;

    h2 {
      font-size: 22px;
    }
    p {
      font-size: 14px;
    }
   }
`

export default StyledNewsContainer
