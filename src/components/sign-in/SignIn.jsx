import './sign-in-styles.scss';
import FormInput from "../../components/form-input/FormInput";
import Button,{BUTTON_TYPE_CLASSES} from "../../components/button/Button";
import { emailAndPasswordSignIn } from "../../utils/firebase.utils";
import { signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase.utils";
import { useState } from 'react';
import { useContext } from 'react';


function SignIn(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    async function  loginWithGoogle(){
        await signInWithGooglePopup();
    }
    async function handleEmailPasswrodSignin(e){
       var response=await emailAndPasswordSignIn(email,password);
       setEmail("");
       setPassword("");
    }

    return(
        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with email and password</span>
            <FormInput label="Email" otherprops={{type:"email",value:email,required:true,onChange:handleEmail}}/>
            <FormInput label="Password" otherprops={{type:"password",value:password,required:true,onChange:handlePassword}}/>
            <div  className='buttons-container'>
            <Button children="sign in" buttonType={BUTTON_TYPE_CLASSES.base} onClick={handleEmailPasswrodSignin} />
            <Button children="google sign in" buttonType={BUTTON_TYPE_CLASSES.google} onClick={loginWithGoogle}/>
            </div>
        </div>
    )
}


export default SignIn;