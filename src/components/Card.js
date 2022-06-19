import '../index.css';
import React from 'react';

const Card = ({ username, email, id }) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 robo-name tc">
            {/* Robo faces can be changed here by changing id+ num below */}
            <img src={`https://robohash.org/${id + 14}?set=set1`} alt="Phel robo" />
            <div className='tc'>
                <h3>{username}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;  