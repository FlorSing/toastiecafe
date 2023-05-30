import React from "react";
import './pictures.css';
import pics from '../../assets/pics.json'


function Pictures() {
    return (
        <>

        <div className="pictures" >
            
                {
                    pics.map((pic)=>(
                        <img src={pic.img}  alt={pic.title}/>
                    
                    ))}
                 
            
        </div>
        </>
    )
}

export default Pictures;

