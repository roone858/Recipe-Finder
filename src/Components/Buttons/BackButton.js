import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
     const navigate =useNavigate()
  return (
      <Button variant="primary" className="my-1" onClick={()=> navigate(-1)}> Back </Button>
  );
}
