import React from 'react'
import styled from "styled-components"
// import "../app/globals.css"


export const Welcome: React.FC = () => {
  return (
    <PageStyle>Welcome</PageStyle>
  )
}


const PageStyle = styled.div`
     background-color: var(--gc-blue);
`