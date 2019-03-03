import styled from "styled-components"

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: calc(100% - 16px);
  padding-top: 3rem;
  height: 5.5rem;
  background: black;
  font-size: 18px;
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
  
  .fa-facebook {
    margin-top: 4px;
  }
  
  .fa-beer {
    display: none; 
  }
  
   @media (max-width: 850px) {
    width: 40%;
    display: flex;
    justify-content: center;
    padding: 4rem;
    margin: 2rem;
    border: 1px solid white;
    height: auto;
    .menu ul {
      flex-direction: column;
      width: 100%;
      padding: 0;
      li {
        transition: all .1s ease-in;
        width: 40vw;
      }
      li:hover {
        background-color: white;
      }
    }
    .menu a {
      justify-content: center;
    }
    .logo__item {
      display: none;
    }
    
   .fa-beer {
      display: unset;
      font-size: 50px;
      position: absolute;
      top: -4px;
      right: -70px;
      transition: transform .5s ease;
      cursor: pointer;
    }
   .fa-beer:hover {
      color: #B28564;
      transform: rotate(-32deg);
   }
  }
`

export default StyledHeader
