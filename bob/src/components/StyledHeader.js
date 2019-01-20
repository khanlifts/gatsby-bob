import styled from "styled-components"

const StyledHeader = styled.div`
  font-size: 18px;
  margin-top: 4rem;
  height: 0;
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
    flex-direction: column;
    opacity: 0;
    height: auto;
    width: 100%;
    margin-top: 30px;
    transition: opacity .2s ease-in;
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
    opacity: 1;
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
    &:hover {
      color: #b28564;
    }
  }
  
  .mobile-menu-item {
    display: none;
  }
  
  .fa-icon {
    margin-top: 4px;
  }
  
   @media (max-width: 1050px) {
    display: flex;
    justify-content: center;
    padding: 4rem;
    margin: 2rem;
    border: 1px solid white;
    height: auto;
    .menu ul {
      flex-direction: column;
      width: 100%;
      li {
        transition: all .1s ease-in;
        width: 60vw;
      }
      li:hover {
        background-color: white;
      }
      li > ul {
        display: none;
        height: 0;
        transition: .3s all ease-in;
      }
      li:hover > ul {
        display: none;
      }
    }
    .menu a {
      justify-content: center;
    }
    .mobile-menu-item {
      display: initial;
    }
    .logo__item {
      display: none;
    }
  }
  
`

export default StyledHeader
