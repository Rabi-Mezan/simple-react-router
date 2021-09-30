import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './Details.css'

const Details = () => {

    const history = useHistory();
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [])
    const { name, email, website, phone, company } = friend;

    const handleSeeDetails = () => {
        history.push('/friends')
    }
    // console.log(params)
    return (
        <div >
            <h3>Details of friend No : {friendId}</h3>
            <div className='details'>

                <h4>Name : {name}</h4>
                <p>Email : {email}</p>
                <p>Website : {website}</p>
                <p>Phone : {phone}</p>
                <p>Works at  :{company?.name}</p>
            </div>
            <button id='details-btn' onClick={handleSeeDetails}>See All Friends</button>

        </div>
    );
};

export default Details;