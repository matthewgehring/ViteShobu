import * as React from 'react';

enum PlayerType {
    self = 'self',
    opp = 'opp',
}

interface chatProps {
    sender: PlayerType,
    content: string,
    pfp: string
}

const Chat = ({sender, content, pfp}:chatProps) => {


    return sender === PlayerType.self ? (
            <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p className="text-sm">{content}</p>
                </div>
            </div>
                <img src={pfp} className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></img>
            </div>)
            :
            (
			<div className="flex w-full mt-2 space-x-3 max-w-xs">
				<img src={pfp} className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></img>
				<div>
					<div className="bg-gray-600 p-3 rounded-r-lg rounded-bl-lg">
						<p className="text-sm">{content} </p>
					</div>
				</div>
			</div>
            )
}

export default Chat;