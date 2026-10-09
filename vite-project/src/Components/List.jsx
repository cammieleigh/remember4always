import React from "react";
import { Link } from "react-router-dom"

const List = (props) => { 
    return(
        <div className=''>
         <div className="note items-center text-center font-raleway flex flex-col gap-y-1.5 m-auto mb-7.5 md:w-[20vw] justify-around">
            <img className='w-[90vw] h-auto' src={`/images/${props.imgpath}`} alt={props.description}></img>
          <h1 className='' >{props.description} </h1>
          <p >{props.price}</p>
          <button id={props.id} className='border rounded p-1.5 md:w-[20vw]'><Link to={`/singleProduct/${props.id}`}>View Here</Link></button>
        </div>
        </div>
    )

}

export default List;