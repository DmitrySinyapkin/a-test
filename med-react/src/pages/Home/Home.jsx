import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.scss'
import srcCard1 from './card1.svg'
import srcCard2 from './card2.svg'
import srcCard3 from './card3.svg'
import Card from "../../components/Card/Card";

const Home = ({ isLoggedin, loginHandler, logoutHandler }) => {
    const navigate = useNavigate()

    const cards = [
        {
            icon: srcCard1,
            title: 'Онлайн-прием',
            text: 'Рыба текст'
        },
        {
            icon: srcCard2,
            title: 'Экстренный Случай',
            text: 'Рыба текст'
        },
        {
            icon: srcCard3,
            title: 'Лечение рака',
            text: 'Рыба текст'
        }
    ]

    return (
        <div className="home">
            <h1 className="home__title">Место для получения медицинской помощи</h1>
            <div className="home__controls">
                {isLoggedin
                    ?
                    <button className="button button_red" onClick={logoutHandler}>Выйти</button>
                    :
                    <button className="button button_red" onClick={loginHandler}>Войти</button>
                }
                <button className="button button_white" onClick={() => navigate('/contacts')}>Контакты</button>
            </div>
            <div className="home__cardlist">
                {cards.map((card, index) => <Card key={index} data={card} />)}
            </div>
        </div>
    )
}

export default Home
