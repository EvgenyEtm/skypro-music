import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}


.wrapper {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
}


.main {
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  box-pack: justify;
  justify-content: space-between;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

*{
  font-family: "StratosSkyeng", sans-serif;
}
   
* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  *before,
  *after {
    -webkit-box-sizing border-box;
    box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }
  
  button {
    cursor: pointer;
  }
  
  @font-face {
    font-family: "StratosSkyeng", sans-serif;
    src: local('StratosSkyeng'), local('StratosSkyeng'),
    url('../fonts/StratosSkyeng.woff2') format('woff2'),
    url('../fonts/StratosSkyeng.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  html,
  body {
    width: 100%
    height: 100%
    font-family "StratosSkyeng", sans-serif;
    color: #ffffff;
  }`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`

export const Container = styled.div`
  height: 100vh;
  margin: 0;
  position: relative;
  background-color: #181818;
`

export const Main = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  box-pack: justify;
  justify-content: space-between;
`
