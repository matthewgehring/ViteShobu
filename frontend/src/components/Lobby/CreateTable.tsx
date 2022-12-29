import React, {} from "react";

type CreateProps = {
    // potentially other user info might just use ID_Token in header instead,
    handleSubmit: (e: React.FormEvent<HTMLButtonElement>, userName: string) => void,
    userName: string
}

export default function CreateTable(props: CreateProps) {
    return (
        <div className="" >
            <button className="font-bold text-white bg-rose-400 rounded-full hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" type='submit' onClick={e=> {props.handleSubmit(e, props.userName);}}>Create New Table</button>
        </div>
    );
}