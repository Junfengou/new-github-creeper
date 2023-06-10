import Header from '@/helpers/Header'
import React from 'react'
import Icon from '@mui/material/Icon'
import Button from "@mui/material/Button"
import { useFetchDataFromGithubApi, useFetchDataTest } from '@/hooks/functions';
import { githubApiState, test } from '@/Recoil/atoms';
import { useRecoilState, useRecoilValue } from 'recoil';

function NewPage() {
    const fetchGithubData = useFetchDataFromGithubApi();
    const fetchTest = useFetchDataTest();
    const [ dataRecoilState, setDataRecoilState ] = useRecoilState(githubApiState);
    const testRecoilState = useRecoilValue(test)
    console.log(dataRecoilState)
    console.log(testRecoilState)

  return (
    <>
        <Header />
        <div>
        <Button onClick={() => fetchGithubData()} variant='contained'>Fetch WesBos Github Profile</Button>
        <Button onClick={() => fetchTest()} variant='contained'>Fetch WesBos Test</Button>
        
        </div>
    </>
  )
}

export default NewPage