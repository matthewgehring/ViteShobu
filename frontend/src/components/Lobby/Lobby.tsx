import React, { useState, FormEventHandler, useEffect} from "react";
import CreateTable from "./CreateTable";



const handleSubmit=(e: React.FormEvent<HTMLButtonElement>, userName: string)=>{
    e.preventDefault();
    create(userName);
}

useEffect(() => {
    getTables();
}, [handleSubmit])

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



export default function Lobby() {
    return (
        <div>
            <CreateTable handleSubmit={handleSubmit} userName={"Matt"}/>
        </div>
    );
}