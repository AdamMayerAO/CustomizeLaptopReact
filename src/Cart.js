import React from 'react'
import { render } from 'react-dom';
import CartItem from './CartItem'
import TotalPrice from './TotalPrice';

function Cart(props){
  //console.log(props.selected[item].cost])
   
   
   return(
        <div className="main__summary">
            <h1 >
            Your cart
            </h1>
            {Object.keys(props.selected).map((feature, idx) => 
                <CartItem 
                key = {idx}
                selectedOption = {props.selected[feature]}
                name = {feature}
                />
            )}  
            <div>
                <TotalPrice selected = {props.selected} />

            </div>
           
           
                 
        </div>
    )
}      
export default Cart