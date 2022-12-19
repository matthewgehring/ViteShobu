import { useState, useEffect } from 'react'
import UserInfo from '../components/User/UserInfo'
import Record from '../components/User/Record'
import PastGames from '../components/User/PastGames'
import { pastGame, userInfo } from '../constants/types'
import { fetchMock } from '../mock'
import { httpMethods } from '../constants/enums'


const exampleGame:pastGame = {
    opponent : 'Devon',
    date : "1/2/20",
    outcome : "Win"

}

const exampleUser:userInfo = {
    userName : "",
    joinDate : "",
    elo : ""

}

function UserPage() {
    //FIGURE THIS OUT, must call mockfetch and update user info
    const [user, setUser] = useState<userInfo>(exampleUser);
    useEffect(() => {
        getUser().then(user => setUser(user.body as userInfo))
    }, [])

    const getUser = async () => {
        const sampleRequest = {
            method: httpMethods.GET,
            url: 'users',
            params: ['']
          }
          
        const response = await fetchMock(sampleRequest)
        return response
    }

    return (
        <>
            <div className='grid  gap-8 grid-cols-2 grid-rows-2 bg-gray-200 min-h-screen w-screen '>
                    <UserInfo {...user}/>
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