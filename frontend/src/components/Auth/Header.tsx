import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png'
type HeaderProps = {
    heading: string,
    paragraph: string,
    linkName: string,
    linkUrl: string
}

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}: HeaderProps){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-24 w-24"
                    src={logo}/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-rose-600 hover:text-rose-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}