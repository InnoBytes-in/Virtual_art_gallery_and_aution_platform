import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import AddToCart from "./AddToCart";
import { Button } from "../styles/Button";


const Product = (curElem) => {
  const { id, name, image, price, category,date } = curElem;
  return (
   
    
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
          <div>
            <h3 className="cart-data">{curElem.name}</h3>
          </div>
          <div>
            <p>Auction Date:  {date}</p>
             
            </div>
            <div>
            
            <NavLink to="/cart" >
        <Button className="btn">Add To Cart</Button>
      </NavLink>
            </div>
        </div>
      </div>
   
   
  );
};

export default Product;
