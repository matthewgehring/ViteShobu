import logo from '../../assets/logo.png';
import type {ButtonLinks} from './navbutton';
import NavButton from './navbutton';


//Add link: object
type NavProps = {
    user: string
}


export default function NavBar({
    user
}: NavProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 justify-between z-50 grid grid-flow-col grow-0 grid-row-3 items-center px-4 py-3 bg-zinc-500 text-zinc-100 shadow-lg">
        <button className="w-32 font-bold text-zinc-100 bg-rose-400 rounded-full hover:bg-rose-600">
          Lobby
        </button>
        <div className="font-bold text-2xl ">{user}</div>
        <button className="w-32 font-bold text-zinc-100 bg-rose-400 rounded-full hover:bg-rose-600" >
          Profile
        </button>
      </nav>
            // <NavButton linkName='About' linkUrl='/about'></NavButton>
            // <div>User: {user}</div>
        
    );
}

export type {NavProps}