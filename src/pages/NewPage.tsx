import Header from '@/helpers/Header'
import React from 'react'
import Icon from '@mui/material/Icon'
import Button from "@mui/material/Button"

function NewPage() {
  return (
    <>
        <Header />
        <div>
        <Button onClick={() => console.log("hello world")} variant='contained'>Hello World</Button>
        </div>
    </>
  )
}

export default NewPage