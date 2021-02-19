import React from 'react';
import TotalPrice from './TotalPrice';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
function CartItem (props){
    const featureHash = props.name + '-' + props.idx;

    return (
        
        <fieldset>
           
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{props.name} </div>
                <div className="summary__option__value">{props.selectedOption.name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(props.selectedOption.cost)}
                </div>
               
               
            </div>
            
            
            
            
        </fieldset>
    )
}
export default CartItem