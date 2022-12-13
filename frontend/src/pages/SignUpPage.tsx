import Header from "../components/Header";
import SignUp from "../components/SignUp";

export default function SignUpPage(){
    return(
        <>
            <Header
              heading="SignUp to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <SignUp/>
        </>
    )
}