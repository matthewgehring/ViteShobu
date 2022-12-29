import React, { useState, useEffect} from "react";
import CreateTable from "./CreateTable";
import Tables from "./Tables";
import { table } from '../../constants/types';
import { httpMethods } from "../../constants/enums";
import { fetchLobbyMockGet, fetchLobbyMockPost } from "../../mock";


//Data to be passed into Tables
const exampletables: table[] = [{
    player1: "",
    player2: "",
    activestatus: true,
    tableID: ""
}]

const exampleUser: string = "Matt";


export default function Lobby() {
    const [data, setData] = useState<table[]>(exampletables);
    const [refresh, setRefresh] = useState<boolean>(false);

    const handleSubmit=(e: React.FormEvent<HTMLButtonElement>, userName: string)=>{
        e.preventDefault();
        create(userName).then(table => {
            setData(table)
            setRefresh(refresh => !refresh)
        });
    }


    // create will take the authorization token of the current logged in user and use it to create a table
    const create = async (userName: string) => {
        const sampleRequest = {
            method: httpMethods.POST,
            url: 'lobby',
            params: [''],
            body: {userName}
          }
        const res = await fetchLobbyMockPost(sampleRequest);
        return res.body as table[];
}

    //ADD THIS WHEN BACKEND IS UP
    const getTables = async () => {
    const sampleRequest = {
        method: httpMethods.GET,
        url: 'lobby',
        params: ['']
      }
    const res = (await fetchLobbyMockGet(sampleRequest)).body as table[];
    setData(res);
}

useEffect(() => {
    console.log("data changed");
    getTables();   
    console.log(refresh)
}, [refresh]);

    return (
        <div className="pt-20 grid grid-row-6 grid-flow-col gap-1">
            <Tables tables={data}/>
            <div className="row-span-2 flex flex-col items-end gap-3">
            <CreateTable handleSubmit={handleSubmit} userName={exampleUser}/>
            <button className="font-bold text-white bg-rose-400 rounded-full hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" type='submit'>Join</button>
            <button className="font-bold text-white bg-rose-400 rounded-full hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" type='submit'>Watch</button>
            </div>
        </div>
    );
}
