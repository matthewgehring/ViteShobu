import React from 'react';
import { useState } from 'react';

const [tableID, setTableID] = useState([]);

//TODO create JOIN/WATCH BUTTON and figure out tableID

type RowProps = {
        player1: string,
        player2: string,
        activestatus: boolean,
        tableID: string
    }



function Row({
    player1,
    player2,
    activestatus,
    tableID
}: RowProps) {
    return (
        <>
            <tr>
              <td>{player1}</td>
              <td>{player2}</td>
              {activestatus ? (<td>join button</td>) : (<td>watch button</td>)}
              </tr>
        </>
    )
}

export default Row;