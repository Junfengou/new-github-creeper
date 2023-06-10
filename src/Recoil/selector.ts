import { DefaultValue, GetRecoilValue, selector, SetRecoilState } from "recoil";
import { testState, githubApiState } from "./atoms"
import axios from "axios";

const rootUrl = "https://api.github.com"

export const testStateSelector = selector({
    key: "testStateSelector",
    get: ({get}: {get: GetRecoilValue}) => {
        return get(testState) + "What";
    },
    set: ({set}: {set: SetRecoilState}, newValue: string | DefaultValue) => {
        // if(newValue != "Test!" && !(newValue instanceof DefaultValue)) {
        //     set(testState, "New state");
        // }
        set(testState, newValue);
    }
})

// export const testGithubDataSelector = selector({
//     key: 'testGithubDataSelector',
//     get: async ({get}: {get: GetRecoilValue}) => {
//         const response = await axios.get(`${rootUrl}`)
//         // const githubData = get(githubApiState)
//         console.log(response.data)
//         return response.data;
//     },
//     set: ({set}, data: any) => {
//         set(githubApiState, data)
//     }
// })

