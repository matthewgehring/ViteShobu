import Row from './Row';

export type table = {
    player1: string,
    player2: string,
    activestatus: boolean,
    tableID: string
}

function Tables(tables: table[]) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Player 1</th>
                    <th>Player 2</th>
                    <th>Active Status</th>
                    <th>Table ID</th>
                </tr>
            </thead>
            <tbody>
                {tables.map((table) => ( <Row {...table} /> ))}
            </tbody>
        </table>
    );
};

export default Tables;

