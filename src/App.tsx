import React from 'react'
import styled from 'styled-components'
import RouterComp from './routes'

const App = () => {
  return (
    <Wrapper>
           <RouterComp/>
  
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
 width: 100%;
 max-width: 100%;
 margin: 0;
`