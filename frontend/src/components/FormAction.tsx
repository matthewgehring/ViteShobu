import { FormEventHandler } from "react"

const buttonCSS = "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"

interface FormActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    handleSubmit: FormEventHandler, //this might need to be something else
    action: 'submit',
    text: string
}

export default function FormAction({
    handleSubmit,
    action='submit',
    text
}: FormActionProps){
    return(
        <>
        {
            <button
                type={action}
                className={buttonCSS}
                onSubmit={handleSubmit}
            >
                {text}
            </button>
        }
        </>
    )
}