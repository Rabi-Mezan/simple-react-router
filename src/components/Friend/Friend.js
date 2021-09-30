import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const { id, name, email, website } = props.friend
    const url = `/friend/${id}`;
    return (
        <div className='friend'>
            <h3>{name} </h3>
            <p>Email : {email} </p>
            <small>Website : {website}</small>
            <br />
            <Link to={url}>
                <button>visit me</button>
            </Link>
        </div>
    );
};

export default Friend;