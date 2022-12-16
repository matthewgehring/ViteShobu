import React, { useState, FormEventHandler, useEffect} from "react";
import CreateTable from "./CreateTable";
import Tables from "./Tables";
import { table } from '../../constants/types'



const handleSubmit=(e: React.FormEvent<HTMLButtonElement>, userName: string)=>{
    e.preventDefault();
    create(userName);
}

// Data to be passed into Tables
//const [data, setData] = useState<table[]>([]);

//ADD THIS WHEN BACKEND IS UP
// const getTables = async () => {
//     const res = await fetch('get data from database of active games');
//     // List of tables
//     // {
//     //     user: "name",
//     //     status: "join/watch",
//     //     table_id: "tableid"
//     // }
//     const data = await res.json();
// }

// useEffect(() => {
//     getTables();
// }, [handleSubmit])

const create = async (userName: string) => {
    // create will take the authorization token of the current logged in user and use it to create a table
    await fetch('url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': localStorage.getItem('id_token')
        },
        body: JSON.stringify(
            userName
        )
    });
}

// will be turned into data
const exampletables: table[] = [{
    player1: "Matt",
    player2: "",
    activestatus: false,
    tableID: "123"
},
{
    player1: "Devon",
    player2: "Dante",
    activestatus: true,
    tableID: "443"
}]

export default function Lobby() {
    return (
        <div className="pt-20 grid grid-row-6 grid-flow-col gap-1">
            <Tables tables={exampletables}/>
            <div className="row-span-2 flex flex-col items-end gap-3">
            <CreateTable handleSubmit={handleSubmit} userName={"Matt"}/>
            <button className="font-bold text-white bg-rose-400 rounded-full hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" type='submit'>Join</button>
            <button className="font-bold text-white bg-rose-400 rounded-full hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" type='submit'>Watch</button>
            </div>
        </div>
    );
}
