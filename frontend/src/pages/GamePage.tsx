import { useState, useEffect } from 'react'
import Board from "../components/Game/Board"
import Chat from '../components/Game/Chat'
import UserTag from '../components/Game/UserTag'
import MovesTable from '../components/Game/MovesTable'



function GamePage() {

  return (
    <>
    <div className='grid grid-cols-2 gap-8 bg-gray-200'>
        <div>
            <UserTag />
            <Board />
            <UserTag />
        </div>
        <div className='grid grid-rows-2 gap-5'>
            <MovesTable />
            <Chat />
        </div>
    </div>
    </>
  )
}

export default GamePage