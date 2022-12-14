import {Link} from 'react-router-dom';
import testPFP from '../../assets/testPFP.png'

type UserTagProps = {

}

export default function UserTag({
}: UserTagProps){
    return(
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border border-gray-400 lg:border-t lg:border-gray-400  rounded p-4 mb-4 mt-4 flex flex-col justify-between leading-normal w-64 bg-gray-300">

            <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src={testPFP} alt="Avatar of user" />
            <div className="text-sm">
                <p className="text-gray-900 leading-none">Sir Shrek </p>
                <p className="text-gray-600">1500</p>
            </div>
            </div>
        </div>
        </div>
    )
}