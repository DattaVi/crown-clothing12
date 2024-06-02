import './checkout-item-styles.scss';
// import { addItemToCart,removeItemFromCart,removeItemEntirelyFromCart } from '../../store/cart/cartAction';
import { useDispatch } from 'react-redux';
import { addItemToCart,removeItemFromCart,removeItemEntirelyFromCart } from '../../store/cart/cartReducer';

function CheckoutItem({item}){
    const{name,imageUrl,price,quantity}=item;
    const dispatchAddItem=useDispatch();
    const dispatchRemoveItem=useDispatch();
    const dispatchRemoveEntirely=useDispatch();
    function handleAdd(){
        dispatchAddItem(addItemToCart(item));
    }
    function handleReduce(){
        dispatchRemoveItem(removeItemFromCart(item));
    }
    function handleRemove(){
        dispatchRemoveEntirely(removeItemEntirelyFromCart(item));
    }
    return (
        <div className='checkout-item-container'>
          <div className='image-container'>
            <img src={imageUrl} alt={`${name}`} />
          </div>
          <span className='name'> {name} </span>
          <span className='quantity'>
            <div className='arrow' onClick={handleReduce}>
              &#10094;
            </div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={handleAdd}>
              &#10095;
            </div>
          </span>
          <span className='price'> {price}</span>
          <div className='remove-button' onClick={handleRemove}>
            &#10005;
          </div>
        </div>
      );
}

export default CheckoutItem;



{/* <h2>{name}</h2>
<span onClick={handleAdd}>+ </span>
<span onClick={handleReduce}>- </span>
<span >{quantity} </span>
<span>{price}</span>
<span onClick={handleRemove}>  remove</span> */}