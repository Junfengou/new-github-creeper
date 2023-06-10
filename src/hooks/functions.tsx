import axios from 'axios';
import { githubApiState, test } from "../Recoil/atoms"
import { useSetRecoilState } from 'recoil';


export const useFetchDataFromGithubApi = () => {
    const rootUrl = "https://api.github.com/users/wesbos"
    const setGithubRecoilState = useSetRecoilState(githubApiState);
    const fetchInfoFromGithub = async () => {
        const res = await axios.get(rootUrl);
        setGithubRecoilState(res.data)
    }
    return fetchInfoFromGithub;
}

export const useFetchDataTest = () => {
    const rootUrl = "https://api.github.com/users/wesbos/followers"
    const setTest = useSetRecoilState(test);
    const fetchInfoFromGithub = async () => {
        const res = await axios.get(rootUrl);
        setTest(res.data)
    }
    return fetchInfoFromGithub;
}