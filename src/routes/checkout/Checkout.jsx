import React from "react";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import './checkout-styles.scss'
import { selectCartItems,selectTotalPrice } from "../../store/cart/cartSelector";
import { useSelector } from "react-redux";
import PaymentForm from "../../components/payment-form/PaymentForm";


function Checkout(){
    const cartItems=useSelector(selectCartItems);
    const totalPrice=useSelector(selectTotalPrice);
    return (
        <div className='checkout-container'>
          <div className='checkout-header'>
            <div className='header-block'>
              <span>Product</span>
            </div>
            <div className='header-block'>
              <span>Description</span>
            </div>
            <div className='header-block'>
              <span>Quantity</span>
            </div>
            <div className='header-block'>
              <span>Price</span>
            </div>
            <div className='header-block'>
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} item={cartItem} />
          ))}
          <div className='total'>TOTAL: ${totalPrice}</div>
          <PaymentForm/>
        </div>
      );

}

export default Checkout;