import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crwnlogo } from '../../assets/crown.svg';
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation-styles.jsx';
import { signOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";
import { selectUser } from "../../store/user/userSelector.js";
import { useDispatch, useSelector } from "react-redux";
import { selectToggleState } from "../../store/cart/cartSelector.js";


function Navigation() {
    const currUser = useSelector(selectUser);
    const toggleState = useSelector(selectToggleState); // Correct usage without destructuring
    const dispatch = useDispatch();

    async function handleSignOut() {
        await signOutUser();
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Crwnlogo className="logo" />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>
                    {
                        currUser ? (
                            <NavLink onClick={handleSignOut}> SIGN OUT</NavLink>
                        ) : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinksContainer>
                {toggleState ? <CartDropDown /> : null}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;
