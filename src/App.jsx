import React from "react";
import { useEffect } from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/navigation";
import Checkout from "./routes/checkout/Checkout";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shopping/Shop";
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "./utils/firebase.utils";
import { setCurrUser } from "./store/user/userReducer";
import { useDispatch } from "react-redux";

function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    const unsubscribe=onAuthStateChangedListener((user)=>{
       if(user){
           createUserDocumentFromAuth(user);
       }
       console.log(setCurrUser(user))
       dispatch(setCurrUser(user));
       console.log(user);
    })
    return unsubscribe;
    },[])


return(
<Routes>
<Route path="/" element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path='shop/*' element={<Shop/>}/>
    <Route path='auth' element={<Authentication/>}/>
    <Route path="checkout" element={<Checkout />} />
  </Route>
</Routes>
);
}

export default App;
