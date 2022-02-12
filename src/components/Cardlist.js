import React from 'react';
import Card from './Card';
const Cardlist = ({ robots }) => {
    return (
        <div>
            {robots.map((card, i) => {
                return (<Card
                    key={i}
                    name={robots[i].name}
                    mail={robots[i].email}
                    id={robots[i].id} />
                );
            })}
        </div>
    );
}

export default Cardlist;