import { showLoginPopup, deleteUserData, handleSubmit, hideLoginPopip } from './handlers'

const setupLogin = () => {
    document.querySelector('.login__button_submit').addEventListener('click', handleSubmit)
    document.querySelector('.login__button_cancel').addEventListener('click', hideLoginPopip)

    const loginButtons = document.querySelectorAll('.button__login')
    
    loginButtons.forEach(button => {
        if (localStorage.getItem('med-vanilla-user')) {
            button.innerHTML = 'Выйти'
            button.addEventListener('click', deleteUserData)
        } else {
            button.innerHTML = 'Войти'
            button.addEventListener('click', showLoginPopup)
        }
    })
}

export default setupLogin
