import React from 'react';

const Card=({name,username,email,id})=>{
    return (
        <div className=' tc bg-light-green dib pa3 ma2 grow bw5 br3 shadow-5'>
            <img alt="Robots" src={`http://robohash.org/${name}?200x200`}/>
            <div>
            <h2>{username}</h2>
            <h3>aka {name}</h3>
            <p>Reach me at <b>{email}</b></p>
            </div>
            
        </div>

    );
}
export default Card;