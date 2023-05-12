import React from "react";


function Card(props){
    return (<>
    
        <div className="cards">
            <div className='card'>
                <img src={props.imgsrc} alt='mypic' className='card_img'/>
                <div className='card-info'>
                    <span className='card-category'>{props.title}</span>
                    <h3 className='card-titla'>{props.sname}</h3>
                    <a href={props.link}>
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
    
        </div>
        </>);
}

export default Card;