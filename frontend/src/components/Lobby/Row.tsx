import {table} from '../../constants/types'

//TODO create JOIN/WATCH BUTTON and figure out tableID

function Row(table:table) {
    return (
        <>
            <tr>
                <td className='text-sm bg-gray-400'>{table.player1}</td>
                <td className='text-sm bg-gray-400'>{table.player2}</td>
                <td className='text-sm bg-gray-400'>{table.activestatus ? 'Watch' : 'Join'}</td>
                <td className='text-sm bg-gray-400'>{table.tableID}</td>
            </tr>
        </>
    )
}

export default Row;