import styled from "styled-components"

const StyledHeader = styled.div`
  font-size: 18px;
  margin-top: 4rem;
  height: 270px;
  z-index: 2;
  
  .menu ul {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    width: 60%;
   }
   
   
  .menu ul li > ul {
    visibility: hidden;
    flex-direction: column;
    margin-top: 30px;
    li {
      width: 100%;
      background-color: white;
      border-bottom: 1px solid gray;
      a {
        color: black;
      }
    }
  }  
  
  .menu ul li:hover > ul {
    display: flex;
    visibility: visible;
    width: 100%;
  } 
  
  .logo__item {
    position: relative;
    bottom: 30px;
  }
  
  .menu a {
    display: flex;
    text-decoration: none;
    color: white;
    padding: 15px;
    text-transform: uppercase;
    text-align: center;
    &:hover {
      color: #b28564;
    }
  }
   @media (max-width: 1050px) {
    display: flex;
    justify-content: center;
    margin-bottom: 200px;
    text-align: center;
    .menu ul {
      flex-direction: column;
      width: 100%;
      li {
      }
      li > ul {
      opacity: 0;
      height: 0;
      transition: .3s all ease-in;
      li > a {
        .menu ul li > ul {
          opacity: 0;
          height: 100%;
        }
      }
      }
      li > ul > li {
        margin-top: -20px;
      }
    }
    .logo__item {
      display: none;
    }
  }
  
`

export default StyledHeader
