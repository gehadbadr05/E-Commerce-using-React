 import { useState } from 'react'
import ProductCards from "./ProductCards"
import { Container } from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col }from 'react-bootstrap'
import { useSelector } from "react-redux";

export default function ProductSection() {
 const [setProducts] = useState([])
const products = useSelector((state) => state.products.arrWithCount);
  
      return (
      <>
      < Container  className= "py-5">
        <Row  x5={1} md={3} className="g-4">
        {products?.map((product)=>(
        <Col key={product.id} className=" md-6 lg-4">
          <ProductCards product={product} />
        </Col>
        ))}
       </Row>
       </Container>
      </>
      );
    }




