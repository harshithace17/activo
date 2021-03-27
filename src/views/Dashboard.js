import React from 'react';
import { hot } from 'react-hot-loader/root';

import '../../css/main.css';
import Segments from '../components/Segments';
import ListOfArticles from '../components/ListOfArticles';
import NavBar from '../views/NavBar';

function Dashboard(){

    return(
        <div className='main'>
            <NavBar />
            <Segments articles={ListOfArticles} />
        </div>
    )

}

export default hot(Dashboard);