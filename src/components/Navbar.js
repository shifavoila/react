import React from 'react';

function Navbar(props) {
     
    const numbers = props.numbers;
    const list = numbers.map((number) => (
        <p key={number}>{number}</p>
    ));

    const activeUsers = props.cars.filter(car => car.isActive);

    return (
        <>
            <ul>{list}</ul>
            {activeUsers.map(car => (
                <li key={car.name}>{car.model}</li>
            ))}
        </>
    )
  
}

export default Navbar;
