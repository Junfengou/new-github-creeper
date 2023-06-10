import Header from '@/helpers/Header'
import React from 'react'
import Icon from '@mui/material/Icon'
import Button from "@mui/material/Button"
import { useFetchDataFromGithubApi } from '@/hooks/functions';
import { githubApiState } from '@/Recoil/atoms';
import { useRecoilState } from 'recoil';

function NewPage() {
    const fetchGithubData = useFetchDataFromGithubApi();
    const [ dataRecoilState, setDataRecoilState ] = useRecoilState(githubApiState);
    
    console.log(dataRecoilState)

  return (
    <>
        <Header />
        <div>
        <Button onClick={() => fetchGithubData()} variant='contained'>Hello World</Button>
        </div>
    </>
  )
}

export default NewPage