import { httpRequest, httpResponse } from "./constants/interfaces"
import boardInit from "./constants/boardInit"
import { userInfo } from "./constants/types"

const usersStub: userInfo = {
    'userName' : 'Karl Marx',
    'elo' : '9001',
    'joinDate' : '1/20/00'
}

//need to figure out this schema
const gameStub = {
    "board": boardInit
}
const stubs: {[key: string]: Object} = {
    "users" : usersStub,
    "games" : gameStub
}


async function fetchMock (req:httpRequest) : Promise<httpResponse>  {
    return new Promise<httpResponse>((resolve, reject) => {
        const res = {body: stubs[req.url] }
        resolve(res)
    })
}

export { fetchMock }