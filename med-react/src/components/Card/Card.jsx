import React from "react";
import './Card.scss'

const Card = ({ data }) => {
    return (
        <div className="card">
            <figure className="card__icon">
                <img src={data.icon} alt='icon' />
            </figure>
            <h5 className="card__title">{data.title}</h5>
            <div className="card__line"></div>
            <div className="card__text">{data.text}</div>
        </div>
    )
}

export default Card
