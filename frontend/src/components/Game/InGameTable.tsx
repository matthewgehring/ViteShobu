import * as React from 'react';

const InGameTable = () => {
    return (
        <>
        <div className="flex flex-col flex-grow w-full max-w-lg bg-gray-100 shadow-xl rounded-lg overflow-hidden">
        <h3 className='text-gray-900'>Moves</h3>
		<div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
        <ul className="list-decimal ml-4">
        <div className="flex ">
        <ol className=" list-decimal space-y-1 w-full list-inside text-sm text-gray-400 leading-tight">
			<li className="text-sm text-left p-1 bg-gray-300 text-gray-900 leading-tight">(0, (0,1), (0,2)) (3. (0,1)</li>
			<li className="text-sm text-left p-1 bg-gray-300 text-gray-900 leading-tight">(0, (0,1), (0,2)) (3. (0,1)</li>
			<li className="text-sm text-left p-1 bg-gray-300 text-gray-900 leading-tight">(0, (0,1), (0,2)) (3. (0,1)</li>
			<li className="text-sm text-left p-1 bg-gray-300 text-gray-900 leading-tight">(0, (0,1), (0,2)) (3. (0,1)</li>
			<li className="text-sm text-left p-1 bg-gray-300 text-gray-900 leading-tight">(0, (0,1), (0,2)) (3. (0,1)</li>
			<li className="text-sm text-left p-1 bg-gray-300 text-gray-900 leading-tight">(0, (0,1), (0,2)) (3. (0,1)</li>
			<li className="text-sm text-left p-1 bg-gray-300 text-gray-900 leading-tight">(0, (0,1), (0,2)) (3. (0,1)</li>
			<li className="text-sm text-left p-1 bg-gray-300 text-gray-900 leading-tight">(0, (0,1), (0,2)) (3. (0,1)</li>
			<li className="text-sm text-left p-1 bg-gray-300 text-gray-900 leading-tight">(0, (0,1), (0,2)) (3. (0,1)</li>
			<li className="text-sm text-left p-1 bg-gray-300 text-gray-900 leading-tight">(0, (0,1), (0,2)) (3. (0,1)</li>
			<li className="text-sm text-left p-1 bg-gray-300 text-gray-900 leading-tight">(0, (0,1), (0,2)) (3. (0,1)</li>
        </ol>
        </div>
        </ul>
		</div>
	</div>
        
        </>
    )
}

export default InGameTable;