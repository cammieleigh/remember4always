import React from "react";

const List = (props) => { 
    return(
        <div className=''>
         <div className="note text-center font-raleway flex flex-col gap-y-1.5 m-auto md:w-[20vw]">
            <img src={props.imgpath} alt={props.description}></img>
          <h1 className='' >{props.description} </h1>
          <p >{props.price}</p>
          <button id={props.id} className='border rounded p-1.5 w-[20vw] m-auto'>View Product</button>
        </div>
        </div>
    )

}

export default List;