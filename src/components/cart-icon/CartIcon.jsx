import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import  './cart-icon-styles.scss';
import { useSelector } from 'react-redux';
import { selectToggleState,selectTotalItems } from '../../store/cart/cartSelector';
import { setTogglestate } from '../../store/cart/cartReducer';
import { useDispatch } from 'react-redux';


function CartIcon() {
    const totalItems = useSelector(selectTotalItems);
    console.log(totalItems);
    const toggleState = useSelector(selectToggleState);
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(setTogglestate(!toggleState));
    }

    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count' onClick={handleClick}>{totalItems}</span>
        </div>
    );
}

export default CartIcon;