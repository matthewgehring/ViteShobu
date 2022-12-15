import React, { useState, FormEventHandler, useEffect} from "react";
import CreateTable from "./CreateTable";
import Tables from "./Tables";
import { table } from "../../constants/types";


// const handleSubmit=(e: React.FormEvent<HTMLButtonElement>, userName: string)=>{
//     e.preventDefault();
//     create(userName);
// }

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

// const create = async (userName: string) => {
//     // create will take the authorization token of the current logged in user and use it to create a table
//     await fetch('url', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             //'Authorization': localStorage.getItem('id_token')
//         },
//         body: JSON.stringify(
//             userName
//         )
//     });
//}

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
        <div>
            <Tables tables={exampletables}/>
        </div>
    );
}
//<CreateTable handleSubmit={handleSubmit} userName={"Matt"}/>