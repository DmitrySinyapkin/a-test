import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  const [user, setUser] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  const handleLogin = (user) => {
    setUser(user)
  }

  const handleLogout = () => {
    setUser({})
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
      <main></main>
      {isOpen && <div className='modal'><Login closeHandler={handleModalClose} loginHandler={handleLogin} /></div>}
    </div>
  );
}

export default App;
