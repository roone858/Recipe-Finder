import React from 'react'
import { Container } from "react-bootstrap";
import cover from "../assets/cover.jpg"
export default function Cover() {
  return (
     <Container >
        <img  className="rounded shadow"  src={cover} alt="cover" style={{height:"auto",width:"100%",  marginTop : "25px"}} />
      </Container>
  )
}
