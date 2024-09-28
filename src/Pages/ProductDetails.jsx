import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { getProductDetails } from "../API/Products";

export default function ProductsDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getProductDetails(id);
      setProduct(data);
    })();
  }, []);
  return (
    <div className='p-3 my-5 d-flex flex-column w-50' style={{ marginLeft: '25%', textAlign: 'center' }}>
      <img src={product?.image} alt="" style={{ width: '20%', height: '20%', marginLeft: '40%' }} />
      <br />
      <p>{product?.title}</p>
      <p>{product?.description}</p>
    </div>
  )
}