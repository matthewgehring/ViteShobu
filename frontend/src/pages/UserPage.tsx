import { useState, useEffect } from 'react'
import UserInfo from '../components/User/UserInfo'
import Record from '../components/User/Record'
import PastGames from '../components/User/PastGames'
import { pastGame, userInfo } from '../constants/types'

const exampleGame:pastGame = {
    opponent : 'Devon',
    date : "1/2/20",
    outcome : "Win"

}

const exampleUser:userInfo = {
    userName : 'Devon',
    joinDate : "1/2/20",
    userElo : "150"

}

function UserPage() {

  return (
    <>
        <div className='grid  gap-8 grid-cols-2 grid-rows-2 bg-gray-200 min-h-screen w-screen '>
                <UserInfo {...exampleUser}/>
                <Record record={['1','0','0']}/>
                <PastGames {...exampleGame} />
            {/* <div className='gap-5  bg-red-100'>
                <PastGames {...exampleGame} />
            </div> */}
        </div>
    </>
  )
}

export default UserPage