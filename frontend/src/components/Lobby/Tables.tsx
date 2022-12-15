import Row from './Row';
import { table } from '../../constants/types'

type TablesProps = {
    tables: table[]
}

function Tables({tables}: TablesProps) {
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
                {tables.map((table) => (<Row {...table} />))}
            </tbody>
        </table>
    );
};

export default Tables;

