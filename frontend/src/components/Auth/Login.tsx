import { useState } from 'react';
import { loginFields } from "../../constants/formFields";
import Input from "./Input";
import FormExtra from './FormExtra';
import FormAction from './FormAction';
import { httpMethods } from '../../constants/enums';
import { fetchTokenMock } from '../../mock';
import { Cookie, setCookie } from '../../constants/interfaces';

const fields=loginFields;
let fieldsState: any = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login({cookies, setCookie}: {cookies: Cookie, setCookie: setCookie}){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e : React.ChangeEvent<HTMLInputElement>)=>{
        if (!e.target) return;
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit= async (e: React.SyntheticEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const token: string = await authenticateUser(); 
        setCookie('jwt', token, { path: '/'});
        const mycookie = cookies['jwt']
        console.log(mycookie);
    }

    //Handle Login API Integration here
    const authenticateUser = async () =>{
        const sampleRequest = {
            method: httpMethods.POST,
            url: 'token',
            params: [''],
            body: {loginState}
        }
        const res = await fetchTokenMock(sampleRequest);
        return res.body as string;
        //TODO GENERATE TOKEN with email and password
    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                            customClass={''}
                    />
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction text="Login" action='submit'/>

      </form>
    )
}