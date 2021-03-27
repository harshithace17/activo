import React from 'react';
import { hot } from 'react-hot-loader/root';

import '../../css/main.css';
import Contents from '../components/Contents';
import NavBar from '../views/NavBar';
import ListOfArticles from '../components/ListOfArticles';

function createHtml(content){
    return {__html: content};
}

function mapping(title){
    for(let i=0;i<Object.keys(ListOfArticles).length-1;i++){
        if(ListOfArticles[i].title === title)
       return ListOfArticles[i];
    }
}

function Blog(props){

    
      
    const {title,content} = mapping(props.match.params.id);
    console.log(content);

    return(
        <div className="main">
            <NavBar />
            <div className="blog">
                <p className="Blue">{title}</p>
                <p className={["display-break"].join(' ')} dangerouslySetInnerHTML={createHtml(content)} />
            </div>
         </div>
    )
}

export default hot(Blog);