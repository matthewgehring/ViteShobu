import Lobby from '../components/Lobby/Lobby'
import NavBar from '../components/inprogress/navbar';


// Put table and create table here
function LobbyPage() {

  return (
    <div>
        <NavBar user={"Devon"}/>
        <Lobby/>
    </div>
  )
}

export default LobbyPage;