import React from 'react'
import styled from "styled-components"
import {github} from "../images/index"
import Image from 'next/image'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import { githubUser } from "../Recoil/atoms"
import { useRecoilState, useSetRecoilState } from 'recoil'
// import github from "../images/github.png"
// import "../app/globals.css"


export const Welcome: React.FC = () => {

    // const [githubUserRecoilState, setGithubUser] = useRecoilState(githubUser)

    // const submitForm = (event: any) => {
    //     event.preventDefault();
    //     console.log("submitted" + githubUserRecoilState)
    // }

    // const handleTextFieldChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = event.target;
    //     setGithubUser(value);
    // }

  return (
    <PageStyle>
        <div className='banner'>
            <Image src={github.logo} alt="github" />
            <h1>Github Creeper</h1>
        </div>
        {/* <div className='search-bar'>
            <Box onSubmit={(e: any) => submitForm(e)} component="form" autoComplete='off' noValidate 
                sx={{'& .MuiTextField-root': {m: 1, width: '25ch'}}}
            >
                <TextField onChange={handleTextFieldChange} required id="github-form" label="Required" defaultValue="hmm" />
            </Box>
        </div> */}
    </PageStyle>
  )
}


const PageStyle = styled.div`
    height: 98vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-blue);

    .banner {
        border: solid 2px red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 30%;

        h1 {
            color: var(--color-white)
        }
    }

    .search-bar {

    }
`