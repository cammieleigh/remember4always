import React from 'react';
import {useState, useEffect} from "react"
import axios from "axios"
import Lists from "./List"

const Products=() => {

    const [products , setNewProducts] = useState([])

    function getNotes() {
      axios({
          method: "GET",
          url:"/api/products/",
        }).then((response)=>{
          const data = response.data
          setNewProducts(data)
        }).catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
            }
        })}

        useEffect(() => {
      getNotes()
        } ,[])
    return(
        <div className='Products mt-8 mb-8 md:flex w-screen gap-x-10 m-auto max-w-screen flex-wrap justify-center'>
            {/* {console.log(products)} */}
                          { products && products.map(product => <Lists
        key={product.id}
        id={product.id}
          imgpath={product.imgpath}
          price={product.price}
          description={product.description} 
          quantity={product.quantity}
          />
          )} 

  

        </div>
    );
}

export default Products;