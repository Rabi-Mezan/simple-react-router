import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const { id, name, email, website } = props.friend
    const url = `/friend/${id}`;
    return (
        <div className='friend'>
            <h3>{name} </h3>
            <Link to={url}>
                <button id='btn'>visit me</button>
            </Link>
        </div>
    );
};

export default Friend;