import { deleteUserData } from './login/handlers.js'

document.querySelector('.profile__contacts').addEventListener('click', () => window.location.href = 'contacts.html')
document.querySelector('.profile__cancel').addEventListener('click', deleteUserData)

if (localStorage.getItem('med-vanilla-user')) {
    const name = JSON.parse(localStorage.getItem('med-vanilla-user')).name
    document.querySelector('.profile__text').innerHTML = `Привет, ${name}`
}
