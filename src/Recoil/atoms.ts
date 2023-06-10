import { atom, RecoilState } from "recoil"

export const testState: RecoilState<string> = atom({
    key: 'testState',
    default: "Test!"
})

export const githubApiState: RecoilState<any> = atom({
    key: "githubApiState",
    default: null
})