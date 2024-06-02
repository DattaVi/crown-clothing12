import React, { useState } from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import './authentication-styles.scss'

function Authentication(){


    return(
        <div className="authentication-container">
          <SignIn/>
          <SignUp/>
        </div>
    )
}

export default Authentication;