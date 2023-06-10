import { GithubUser } from "@/types/types"
import { atom, RecoilState } from "recoil"

export const testState: RecoilState<string> = atom({
    key: 'testState',
    default: "Test!"
})

export const githubApiState: RecoilState<GithubUser> = atom({
    key: "githubApiState",
    default: {} as GithubUser
})

export const test: RecoilState<any> = atom({
    key: "test",
    default: null
})