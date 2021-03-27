import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import {Link} from 'react-router-dom'


function App(props) {

    return (
        <>
          <div class="main">
              <h1>This is for routing checking</h1>
              <Link to={{pathname:'/blog'}}>Hello click me</Link>
          </div>
        </>
    );
}

export default hot(App);
