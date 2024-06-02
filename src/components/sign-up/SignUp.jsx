import React from "react";
import { useState } from "react";
import { CreateUserWithEmailAndPassword,createUserDocumentFromEmailAndPasswordLogin } from "../../utils/firebase.utils";
import FormInput from "../form-input/FormInput";
import './sign-up-form-styles.scss';
import Button from "../button/Button";
import { useContext } from "react";

const emptyFormfields={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
};

function SignUp(){
const[formFields,setFormFields]=useState(emptyFormfields);
const{displayName,email,password,confirmPassword}=formFields;

function handleChange(e){
    const {name,value}=e.target
    setFormFields({...formFields,[name]:value})
}

async function handleSubmit(event){
    event.preventDefault();
    if(formFields.password===formFields.confirmPassword){
        try{
        const response=await CreateUserWithEmailAndPassword(formFields.email,formFields.password);
        const docRef=await createUserDocumentFromEmailAndPasswordLogin(response.user,formFields.displayName);
        setFormFields(emptyFormfields);
        }
        catch(error){
            console.log(error);
            window.alert(error);
        }
    }
    else{
        window.alert("password and confirm password do not match");
    }
    setFormFields(emptyFormfields);
}
     
    return(
        <div className="sign-up-container">
              <h2>Don't have an  account?</h2>
                <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} >
              
                <FormInput  label="Display Name" otherprops={{type:"text", name:"displayName", value:displayName ,onChange:handleChange, required:true}} />
                
                <FormInput label="Email" otherprops={{type:"email", name:"email", value:email ,onChange:handleChange, required:true}} />
                
                <FormInput label="Password" otherprops={{type:"password", name:"password", value:password ,onChange:handleChange, required:true}} />
                
                <FormInput label="Confirm Password" otherprops={{type:"password", name:"confirmPassword", value:confirmPassword ,onChange:handleChange, required:true}} />
                <Button children="Submit" buttonType="inverted" type="submit"/>
            </form>
        </div>
    )
}

export default SignUp;