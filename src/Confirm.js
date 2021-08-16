import React from 'react';
import { Link } from 'react-router-dom';

const Confirm = props => {
    const { order } = props;

    return (
        <div>
            <h1>{order.name}, your {order.size.toLowerCase()} pizza is on its way!</h1>
            <button><Link to="/">RETURN</Link></button>
        </div>
    )
}

export default Confirm;