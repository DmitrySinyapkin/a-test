import React, { useState } from "react";
import './Login.scss'
import { validateLogin, validatePassword } from '../../utils/validators.js'
import { loginUser } from "../../api/fakeApi";
import { useNavigate } from "react-router-dom";

const Login = ({ closeHandler, loginHandler }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginMessage, setLoginMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')

    const navigate = useNavigate()

    const messages = {
        login: {
            empty: 'Введите логин!',
            fail: 'Недопустимые символы!'
        },
        password: {
            empty: 'Введите пароль!',
            short: 'Пароль слишком короткий!',
            fail: 'Недопустимые символы!'
        }
    }

    const loginValidationCallback = (value) => {
        setLoginMessage(value)
    }

    const passwordVaidationCallback = (value) => {
        setPasswordMessage(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const loginValidation = validateLogin(login, loginValidationCallback, messages.login)
        const passwordValidation = validatePassword(password, passwordVaidationCallback, messages.password)

        if (loginValidation && passwordValidation) {
            loginUser(login, password)
                .then(resp => {
                    loginHandler(resp)
                    closeHandler()
                    navigate('/profile')
                })
                .catch(err => alert(err.message))
        }
    }

    return (
        <form className="login">
            <div className="login__title">Войти:</div>
            <label className="login__field">
                Логин:
                <input className="field__input" type='text' value={login} onChange={(e) => setLogin(e.target.value)} />
                <div className="field__message">{loginMessage}</div>
            </label>
            <label className="login__field">
                Пароль:
                <input className="field__input" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className="field__message">{passwordMessage}</div>
            </label >
            <div className="login__controls">
                <button className="button button_white login__button" onClick={handleSubmit}>Войти</button>
                <button className="button button_white login__button" onClick={closeHandler}>Отмена</button>
            </div>
        </form>
    )
}

export default Login
