import styled from "styled-components"

const StyledIntroContainer = styled.div`
  width: 80%;
  margin: 10rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  .intro__text {
    padding: 0 2rem;
  }
  .intro__image {
    padding: 0 3rem;
  }
  
  @media (max-width: 1200px) {
    .intro__image {
      display: none;
    }
  }
  @media (max-width: 550px) {
    margin: 6rem auto;
    .intro__text {
      width: 80%;
    }
  }
`

export default StyledIntroContainer
