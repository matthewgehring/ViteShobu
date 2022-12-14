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
       
        <nav className="bg-gray-800 p-2 mt-0 basis-full w-full top-0">
            <div className="container mx-auto flex flex-wrap items-center">
            <span className="font-semibold text-xl tracking-tight">Shobu</span>
            </div>
            <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <NavButton linkName='Home' linkUrl='/lobby'></NavButton>
                <NavButton linkName='About' linkUrl='/lobby'></NavButton>
                <NavButton linkName='learn' linkUrl='/lobby'></NavButton>
            </div>
            <div>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
            </div>
            </div>
        </nav>
            // <NavButton linkName='About' linkUrl='/about'></NavButton>
            // <div>User: {user}</div>
        
    );
}

export type {NavProps}