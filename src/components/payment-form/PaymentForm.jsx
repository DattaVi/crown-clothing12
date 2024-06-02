import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import Button from "../button/Button";
import { BUTTON_TYPE_CLASSES } from "../button/Button";
import { PaymentFormContainer,FormContainer } from "./payment-form-styles";
import { selectTotalPrice } from "../../store/cart/cartSelector";
import { selectUser } from "../../store/user/userSelector";
import {useSelector} from 'react-redux'
import { useState } from "react";


function PaymentForm(){
const stripe=useStripe();
const elements=useElements();
const amount=useSelector(selectTotalPrice);
const currUser=useSelector(selectUser);
const [isProcessing,setIsProcessing]=useState(false)

   const paymentHandler=async(e)=>{
    e.preventDefault();
    if(!stripe || !elements){
        return;
    }
    setIsProcessing(true)
    const response=await fetch('/.netlify/functions/create-payment-intent',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({amount:amount*100}),
    }).then((res)=>res.json());
    console.log(response);
    const {paymentIntent:{client_secret}}=response;
    const paymentResult=await stripe.confirmCardPayment(client_secret,{
        payment_method:{
            card:elements.getElement(CardElement),
            billing_details:{
                name:currUser?currUser.displayName:'Guest'
            }

        }
    })
    setIsProcessing(false);
    if(paymentResult.error){
        alert('some error')
    }else{
        if(paymentResult.paymentIntent.status==='succeeded'){
            alert('Payment Successful');
        }
    }

   }

    return(
    <PaymentFormContainer >
        <FormContainer onSubmit={paymentHandler}>
            <h2>Credit Card Payment</h2>
        <CardElement/>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}  isLoading={isProcessing}>Pay now</Button>
        </FormContainer>
 </PaymentFormContainer>   
    );
}

export default PaymentForm;