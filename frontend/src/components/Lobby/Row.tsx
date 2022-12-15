import { table } from '../../constants/types'

//TODO create JOIN/WATCH BUTTON and figure out tableID

function Row({player1,player2, activestatus,tableID}:table) {
    return (
        <>
            <tr>
                <td className='text-sm bg-gray-400'>{player1}</td>
                <td className='text-sm bg-gray-400'>{player2}</td>
                <td className='text-sm bg-gray-400'>{activestatus ? 'Watch' : 'Join'}</td>
                <td className='text-sm bg-gray-400'>{tableID}</td>
            </tr> 
        </>
    )
}

export default Row;