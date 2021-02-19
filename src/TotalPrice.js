import React from 'react';
import CartItem from './CartItem'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
function TotalPrice(props){
  let total = Object.values(props.selected).reduce(
    (acc, curr) => acc + curr.cost, 0);

  return(
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
          Total = {USCurrencyFormat.format(total)}
          </div>
      </div>
  )
}

export default TotalPrice