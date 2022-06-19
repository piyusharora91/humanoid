import React from 'react';
import Card from './Card';
const Cardlist = ({ robots }) => {
    return (
        <div className='bot-container'>
            {robots.map((card, i) => {
                return (<Card
                    key={i}
                    username={robots[i].username}
                    mail={robots[i].email}
                    id={robots[i].id} />
                );
            })}
        </div>
    );
}

export default Cardlist;