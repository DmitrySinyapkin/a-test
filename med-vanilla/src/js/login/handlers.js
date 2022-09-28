import loginPopup from "./loginPopup";
import { loginUser } from "../api/fakeApi";

const login = (user, password) => {
    loginUser(user, password)
        .then((resp) => {
            localStorage.setItem('med-vanilla-user', JSON.stringify(resp))
            setTimeout(() => window.location.href = 'profile.html', 0)
        })
        .catch((err) => alert(err.message))
}

export const hideLoginPopip = () => {
    document.querySelector('.modal').classList.remove('modal_opened')
}

export const handleSubmit = () => {
    const user = document.querySelector('.field__login').value
    const password = document.querySelector('.field__password').value

    if (user && password) {
        login(user, password)
    } else {
        alert('Заполните все поля!')
    }
}

export const showLoginPopup = () => {
    document.querySelector('.modal').classList.add('modal_opened')
}

export const deleteUserData = () => {
    localStorage.removeItem('med-vanilla-user')
    window.location.href = 'index.html'
}
