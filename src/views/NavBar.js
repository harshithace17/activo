import React from 'react';
import { hot } from 'react-hot-loader/root';

import "../../css/main.css";
import {Link} from 'react-router-dom';


function NavBar(){
 
    return(
        <div>
           <ul className="nav">
               <Link to="/about">
               <li  className='nav-links'>About</li>
               </Link>
               <Link to="/">
               <li  className='nav-links'>Blog</li>
               </Link>
           </ul>
        </div>
    )
}


export default hot(NavBar);