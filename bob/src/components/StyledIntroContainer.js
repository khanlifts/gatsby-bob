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
  @media (max-width: 800px) {
    .intro__text {
      width: 80%;
      font-size: 14px;
    }
  }
`

export default StyledIntroContainer
