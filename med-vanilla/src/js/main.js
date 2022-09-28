import logo from '../assets/logo.svg'
import card1 from '../assets/card1.svg'
import card2 from '../assets/card2.svg'
import card3 from '../assets/card3.svg'
import '../scss/index.scss'
import setupLogin from './login/setupLogin'

setupLogin()

document.querySelector('.button__contacts').addEventListener('click', () => window.location.href = 'contacts.html')
