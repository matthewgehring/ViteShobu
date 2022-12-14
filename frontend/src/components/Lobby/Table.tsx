import React from 'react';
import Row from './Row';

type TableProps = Array<object>;


function Table(tables: TableProps) {
    return (
        <>
         <div>
            <caption>Active Games</caption>
        </div>
            <table>
              <tbody>
                    <tr>
                    <th>Player 1</th>
                    <th>Player 2</th>
                    <th>Action</th>
                    </tr>
                    {tables.map((table, i) => <Row table={table} key={i} />)}   
                </tbody>       
            </table>
        </>
    )
}

export default Table;