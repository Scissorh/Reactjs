import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import Sdata from './Sdata';

function ncard(val){
     return(
          <Card
          imgsrc={val.imgscr}
          title={val.title}
          sname= {val.sname}
          link={val.links}          
          
          
          />
     );
}
ReactDOM.render(<>
<h1 className='heading_style'>List of top 10 netflix series</h1>
{Sdata.map(ncard)}
</>
,
document.getElementById('root')

);