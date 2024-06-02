import './product-card-styles.scss';
import Button,{BUTTON_TYPE_CLASSES} from '../button/Button';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cartReducer';


function ProductCard({product}){
     const {name,price,imageUrl}=product;
     const dispatch=useDispatch();
     function handleClick(){
      dispatch(addItemToCart(product));
     }
     return (
        <div className='product-card-container'>
          <img src={imageUrl} alt={`${name}`} />
          <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
          </div>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleClick}>Add to card</Button>
        </div>
     )
};

export default ProductCard;