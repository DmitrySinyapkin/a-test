import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Profile.scss'

const Profile = ({ username, logoutHandler }) => {
    const [logoutBtnText, setLogoutBtnText] = useState(window.innerWidth < 1000 ? 'Выйти' : 'Выйти из аккаунта')
    const [contactsBtnText, setContactsBtnText] = useState(window.innerWidth < 1000 ? 'Контакты' : 'Перейти в контакты')

    const navigate = useNavigate()

    const handleResize = () => {
        if (window.innerWidth < 1000) {
            setLogoutBtnText('Выйти')
            setContactsBtnText('Контакты')
        } else {
            setLogoutBtnText('Выйти из аккаунта')
            setContactsBtnText('Перейти в контакты')
        }
    }

    window.onresize = handleResize

    const handleLogout = () => {
        logoutHandler()
        navigate('/')
    }

    return (
        <div className="profile">
            <h1 className="profile__text">Привет, {username}</h1>
            <div className="profile__controls">
                <button className="button button_red" onClick={handleLogout}>{logoutBtnText}</button>
                <button className="button button_white" onClick={() => navigate('/contacts')}>{contactsBtnText}</button>
            </div>
        </div>
    )
}

export default Profile
