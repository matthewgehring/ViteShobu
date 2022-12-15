import { table } from './Lobby';

//TODO create JOIN/WATCH BUTTON and figure out tableID

function Row(table:table) {
    return (
        <>
            <tr>
                <td>{table.player1}</td>
                <td>{table.player2}</td>
                <td>{table.activestatus ? 'Watch' : 'Join'}</td>
                <td>{table.tableID}</td>
            </tr>
        </>
    )
}

export default Row;