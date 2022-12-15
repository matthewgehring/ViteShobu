import Row from './Row';
import { table } from '../../constants/types'
type TablesProps = {
    tables: table[]
}
function Tables({tables}:TablesProps) {
    console.log(tables)
    return (
        <div>
            <h1 className='text-sm bg-gray-400'>Hello</h1>
        <table>
            <thead>
                <tr >
                    <th className='text-sm bg-gray-400'>Player 1</th>
                    <th className='text-sm bg-gray-400'>Player 2</th>
                    <th className='text-sm bg-gray-400'>Active Status</th>
                    <th className='text-sm bg-gray-400'>Table ID</th>
                </tr>
            </thead>
            <tbody>
                {tables.map((table) =>  <Row {...table} /> )}
            </tbody>
        </table>

        </div>
    );
};

export default Tables;

