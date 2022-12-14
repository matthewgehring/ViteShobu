import * as React from 'react';
import testPFP from '../../assets/testPFP.png'
import ChatMessage from './ChatMessage'
import { PlayerType } from '../../constants/enums';


const Chat = () => {
    return (
        <div className="flex flex-col flex-grow w-full max-w-lg bg-white shadow-xl rounded-lg overflow-hidden">
		<div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
			<ChatMessage content='Hello world' sender={PlayerType.self} pfp={testPFP} />
			<ChatMessage content='Hello world' sender={PlayerType.opp} pfp={testPFP} />
		</div>
		<div className="bg-gray-300 p-4">
			<input className="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…" />
		</div>
	</div>
    )
}

export default Chat;