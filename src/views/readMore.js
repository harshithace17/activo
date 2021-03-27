import React,{useState} from 'react';
import { hot } from 'react-hot-loader/root';

function AppMore() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
        porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
        commodi officia aliquam! Maxime.
      </p>
  </div>
  const linkName=readMore?'Read Less << ':'Read More >> '
  return (
    <div>
      <a onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      {readMore && extraContent}
    </div>
  );
}

export default hot(AppMore);