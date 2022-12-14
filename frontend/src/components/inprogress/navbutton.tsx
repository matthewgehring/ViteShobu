import {Link} from 'react-router-dom';

type ButtonLinks = {
    linkName: string,
    linkUrl: string
}

export default function NavButton({
    linkName,
    linkUrl
}: ButtonLinks) {
    return (
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to={linkUrl}>{linkName}</Link>
    );
}

//alternate css inline-block px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10
export type {ButtonLinks}