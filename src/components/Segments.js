import React from 'react';
import { hot } from 'react-hot-loader/root';
import {Link} from 'react-router-dom';

function createHtml(content){
   return {__html:content}
}


function createSegments({title,content,path}){
    return(
        <>
          <div className="blog">
           <Link to={{pathname:'/blog/'+ path}} className="Blue">{title}</Link>
            <p className={['oneLine'].join(' ')} dangerouslySetInnerHTML={createHtml(content)}/>
          </div>
        </>
    )
}


function Segments({articles}){

    const row = [];

    for(let i=0;i<Object.keys(articles).length-1;i++){
        row.push(<div key={articles[i].title}>{createSegments(articles[i])}</div>);
    }

    return <div>{row}</div>

}

export default hot(Segments);