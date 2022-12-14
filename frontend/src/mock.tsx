import { httpRequest, httpRequestPOST, httpResponse } from "./constants/interfaces"
import boardInit from "./constants/boardInit"
import { userInfo, table } from "./constants/types"

const usersStub: userInfo = {
    'userName' : 'Karl Marx',
    'elo' : '9001',
    'joinDate' : '1/20/00'
}

//table ID from backend
const lobbyStub: table = {
    'player1' : '',
    'player2' : '',
    'activestatus' : false,
    'tableID' : '596'
}

let lobbyGetStub: table[] = [{
    player1: "Matt",
    player2: "",
    activestatus: false,
    tableID: "123"
},
{
    player1: "Devon",
    player2: "Dante",
    activestatus: true,
    tableID: "443"
}]

const tokenStub: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

//need to figure out this schema
const gameStub = {
    "board": boardInit
}
const apiEndPoints: {[key: string]: Object} = {
    "users" : usersStub,
    "games" : gameStub,
    "lobby" : lobbyGetStub,
    "token" : tokenStub
}


// FETCH MOCKS HERE___________________________________________________________________________________________

async function fetchTokenMock (req:httpRequestPOST) : Promise<httpResponse>  {
    return new Promise<httpResponse>((resolve, reject) => {
        const res = {body: apiEndPoints[req.url]}
        resolve(res);
    })
}


async function fetchLobbyMockPost (req:httpRequestPOST) : Promise<httpResponse>  {
    return new Promise<httpResponse>((resolve, reject) => {
        let newTable = lobbyStub;
        newTable.player1 = req.body.userName;
        lobbyGetStub.push(newTable);
        const res = {body: lobbyGetStub}
        resolve(res);
    })
}

async function fetchLobbyMockGet (req:httpRequest) : Promise<httpResponse>  {
    return new Promise<httpResponse>((resolve, reject) => {
        const res = {body: apiEndPoints[req.url] }
        resolve(res);
    })
}

async function fetchMock (req:httpRequest) : Promise<httpResponse>  {
    return new Promise<httpResponse>((resolve, reject) => {
        const res = {body: apiEndPoints[req.url] }
        resolve(res)
    })
}

export { fetchMock, fetchLobbyMockGet, fetchLobbyMockPost, fetchTokenMock }