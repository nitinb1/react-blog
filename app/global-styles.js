import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .category a{
    display: inline-block;
    text-align: center;
    font-size: 10px;
    background: #d10014;
    color: #fff;
    padding: 4px 6px;
    line-height: 10px;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    border-radius: 3px;
    margin-right: 5px;
  }
  a{
    text-decoration: none;
  }
  .post-time{
    display:flex;
  }
  .post-content{
    padding: 10px 0
  }
  .post-link :hover{
    color: #3f51b5
  }
`;

export default GlobalStyle;
