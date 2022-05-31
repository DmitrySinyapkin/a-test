import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Contacts from './pages/Contacts/Contacts';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

function App() {
  const [user, setUser] = useState(localStorage.getItem('med-react-user') ? JSON.parse(localStorage.getItem('med-react-user')) : {})
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()

  const handleLogin = (user) => {
    setUser(user)
    localStorage.setItem('med-react-user', JSON.stringify(user))
  }

  const handleLogout = () => {
    setUser({})
    localStorage.removeItem('med-react-user')
    navigate('/')
  }

  const handleModalOpen = () => {
    setIsOpen(true)
  }

  const handleModalClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header loggedIn={user.name ? true : false} modalHandler={handleModalOpen} logoutHandler={handleLogout} />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home isLoggedin={user.name && true} loginHandler={handleModalOpen} logoutHandler={handleLogout} />} />
          <Route path='/profile' element={<Profile username={user.name} logoutHandler={handleLogout} />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </main>
      {isOpen && <div className='modal'><Login closeHandler={handleModalClose} loginHandler={handleLogin} /></div>}
    </div>
  );
}

export default App;
