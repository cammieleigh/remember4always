import React, { useState, useEffect } from "react";
import axios from "axios";
import View from "./ProductView";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { productid } = useParams();

  useEffect(() => {
    function getProduct() {
      axios({
        method: "GET",
        url: `/api/products/${productid}`,
      })
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
          }
        });
    }

    getProduct();
  }, [productid]);

  return (
    <div className="Products md:flex w-screen gap-x-10 m-auto max-w-screen flex-wrap justify-center">
      {product && (
        <View
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
};

export default SingleProduct;