
type table = {
    player1: string,
    player2: string,
    activestatus: boolean,
    tableID: string
}

type TablesProps = {
    tables: table[]
}

type pastGame = {
    opponent: string,
    date: string,
    outcome: string
}

type userInfo = {
    userName: string,
    elo: string,
    joinDate: string,
}


export type { table, pastGame, userInfo, TablesProps };