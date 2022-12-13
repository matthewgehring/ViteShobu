import { useState } from 'react';
import { loginFields } from "../../constants/formFields";
import Input from "./Input";
import FormExtra from './FormExtra';
import FormAction from './FormAction';

const fields=loginFields;
let fieldsState: any = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e : React.ChangeEvent<HTMLInputElement>)=>{
        if (!e.target) return;
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e: React.SyntheticEvent<HTMLFormElement>)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{

    }

    return(
        <form className="mt-8 space-y-6">
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
        <FormAction handleSubmit={handleSubmit} text="Login" action='submit'/>

      </form>
    )
}