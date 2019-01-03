import styled from "styled-components"

const StyledIntroContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  
  h2 {
    font-size: 40px;
  }
  
  h4 {
    font-size: 25px;
  }
  
  span {
    display: inline;
  }

  .preview__title {
    padding: 0 2rem;
  }
  .preview__points {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .preview__points-left {
    padding-right: 3rem;
  }
  .icons {
    font-size: 40px;
    margin-bottom: 20px;
    transition: color 1s;
  }
  .icons:hover {
    color: #B28564;
  }
  
  @media (max-width: 1200px) {
    .preview__image {
      display: none;
    }
  }
`

export default StyledIntroContainer
