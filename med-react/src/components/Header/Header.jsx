import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.scss'
import logo from './logo.svg'

const Header = ({ loggedIn, modalHandler, logoutHandler }) => {
    const navigate = useNavigate()

    return (
        <div className="header">
            <div className="header__logo" onClick={() => navigate('/')}>
                <img className="logo__img" src={logo} alt="logo" />
            </div>
            <div className="header__controls">
                <Link to='/contacts'>Контакты</Link>
                {loggedIn
                    ?
                    <button className="button button_white button__login" onClick={logoutHandler}>Выйти</button>
                    :
                    <button className="button button_white button__login" onClick={modalHandler}>Войти</button>
                }
            </div>
        </div>
    )
}

export default Header
