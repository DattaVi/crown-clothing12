import React from 'react';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { useNavigate } from 'react-router-dom';
import { CartDropDownContainer, EmptyMessage, CartItems } from './cartdropdown-styles';
import { selectCartItems } from '../../store/cart/cartSelector';
import { useSelector } from 'react-redux';

function CartDropDown() {
  const cartItems=useSelector(selectCartItems);
  console.log(cartItems);
  const navigate = useNavigate();

  function goToCheckoutHandler() {
    navigate('/checkout');
  }

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType="base" onClick={goToCheckoutHandler}>
        CHECKOUT
      </Button>
    </CartDropDownContainer>
  );
}

export default CartDropDown;
