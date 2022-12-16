type table = {
    player1: string,
    player2: string,
    activestatus: boolean,
    tableID: string
}

type pastGame = {
    opponent: string,
    date: string,
    outcome: string
}

type userInfo = {
    userName: string,
    userElo: string,
    joinDate: string,
}

export type { table, pastGame, userInfo };