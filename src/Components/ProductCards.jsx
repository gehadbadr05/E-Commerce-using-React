import React from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { decCartCount, incCartCount } from '../Redux/Slices/cartCounterSlice';
import {
  decProductCount,
  incProductCount,
} from "../Redux/Slices/productsSlice";

export default function ProductCards({ product: { image, id, price, title, count } }) {

  const navigate = useNavigate();
  const dispatch= useDispatch()

  const handleInc = (id) => {
   dispatch(incCartCount(id));
   dispatch(incProductCount(id));
  };

  const handleDec = (id) => {
    dispatch(decCartCount(id));
    dispatch(decProductCount(id));
  }

  const navigateToDetails = (id) => {
    navigate(`${id}`);
  };

  
  return (
    <Card style={{ width: "100%", marginRight: "1%", marginBottom: "2%" ,}} className='h-100'>
      <>
        <Card.Img variant="top" alt="..." style={{ height: "300px"}} src={image} 
          onClick={() => navigateToDetails(id)}
         />

        <Card.Body style={{ display: "flex", flexWrap: "wrap" }}>
          <Card.Title style={{ fontSize: "24px", fontWeight: "bold" }}>
            Title: {title}
          </Card.Title>
          <Card.Text style={{ fontSize: "18px", fontWeight: "bold" }}>
            {/* Price: {props.price + (props.price * count)} */}
            Price: {price}  
          </Card.Text>
        </Card.Body>
        <div className=' d-flex justify-content-between'>
          <Button variant="primary" className={`btn btn-success ${count ? "" : "w-100"}`}
            onClick={() => handleInc(id)}>Add</Button>
          {count ? (
            <>
              <span style={{ textAlign: "center" }}> Count:{count}</span>
              <Button variant="primary" onClick={() => handleDec(id)}
                className="btn btn-danger">Remove</Button>
            </>
          ) : (
            ""
            )}
        </div>
      </>
    </Card>
  )
}







