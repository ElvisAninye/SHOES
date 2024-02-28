import React from "react";
import './styles.scss';
import { Link } from 'react-router-dom'
import { auth } from "../../firebase/utils";

import Logo from './../../assets/Shoes.jpeg';

const Header = props => {
    const { currentUser } = props;

    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/" onClick={() => {
                        window.location.href = "/";
                    }}>
                        <img src={Logo} alt="shoe LOGO" />
                    </Link>
                </div>

                <div className="callToActions">

                    {currentUser && (
                        <ul>
                            <li>
                                <span onClick={() => auth.signOut()}>
                                    LogOut
                                </span>
                            </li>
                        </ul>
                    )}

                    {!currentUser && (
                        <ul>
                        <li>
                        <Link to="/registration" onClick={() => {
                        window.location.href = "/registration";
                        }}>
                                Register
                            </Link>
                        </li>
                        <li>
                        <Link to="/login" onClick={() => {
                        window.location.href = "/login";
                        }}>
                                Login
                            </Link>
                        </li>
                    </ul>
                    )}
                </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    currentUser: null
}

export default Header;