import React from 'react';
import './App.css'
const searchBox= ({searchfield,searchChange}) =>{
    return(
        <div className='pa2 br4'>
            <input className='br4 pa3 ba b--red bg-black' type='search' placeholder='search robots' 
            onChange={searchChange} />
                    
        </div>
    );
}
export default searchBox;