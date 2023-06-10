import { GithubUser } from "@/types/types"
import { atom, RecoilState } from "recoil"

export const githubUser: RecoilState<string> = atom({
    key: 'githubUser',
    default: ""
})

export const githubApiState: RecoilState<GithubUser> = atom({
    key: "githubApiState",
    default: {} as GithubUser
})

export const test: RecoilState<any> = atom({
    key: "test",
    default: null
})