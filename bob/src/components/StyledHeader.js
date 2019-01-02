import styled from "styled-components"

const StyledHeader = styled.div`
  border-bottom: 1px solid gray;
  height: 150px;
  
  nav {
    position: relative;
    left: 10px;
  }
  
  .nav-links {
    display: inline-block;
    vertical-align: top;
    margin-right: 45px;
    height: 80px;       
    line-height: 150px;
    text-decoration: none;
    color: white;
  }
  
  .nav-links:hover {
    cursor: pointer;
    color: #B28564;
    transition: color .5s;
  }
  
   .nav-links:active {
    padding-bottom: 50px;
    border-bottom: 5px solid #B28564
  }
  
  .menu-icon {
    font-size: 32px;
    visibility: hidden;
    vertical-align: middle;
  }
  
  .fb-icon {
    font-size: 16px;
  }
  
  @media (max-width: 990px) {
    nav {
      left: 55px;
    }
    .nav-links {
      visibility: hidden;
      margin-right: 0;
    }
    .menu-icon {
      visibility: visible;
    }
  }
`

export default StyledHeader
