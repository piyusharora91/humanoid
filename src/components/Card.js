import '../index.css';
import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 robo-name tc">
            <img src={`https://robohash.org/${id}?set=set2`} alt="Phel robo" />
            <div className='tc'>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;  