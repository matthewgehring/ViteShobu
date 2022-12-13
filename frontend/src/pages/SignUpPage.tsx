import Header from "../components/Auth/Header";
import SignUp from "../components/Auth/SignUp";

export default function SignUpPage(){
    return(
        <>
            <Header
              heading="Create your account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <SignUp/>
        </>
    )
}