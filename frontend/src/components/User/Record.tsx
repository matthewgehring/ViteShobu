import {Link} from 'react-router-dom';

type RecordProps = {
    record: string[]
}

export default function Record({
    record
}: RecordProps){
    return(
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border border-gray-400 lg:border-t lg:border-gray-400  rounded p-8 mb-4 mt-4 flex flex-col justify-between leading-normal w-64 bg-gray-300">
           
            <div className="text-sm grid grid-cols-3">
                <p className="text-gray-900">Wins: {record[0]}</p>
                <p className="text-gray-600">Loses: {record[1]}</p>
                <p className="text-gray-600">Draws: {record[2]}</p>
            </div>
        </div>
        </div>
    )
}