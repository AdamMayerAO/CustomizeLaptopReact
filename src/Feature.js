import React from 'react';
import FeatureOption from './FeatureOption';
import CompleteMenu from './CompleteMenu';
import slugify from 'slugify';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

function Feature (props) {
    const featureHash = props.name + '-' + props.idx;
    return(
        <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
               <h3>{props.name}</h3>
               
            </legend>
            {(props.value).map((option, idx)=>
                    <FeatureOption 
                    featureName = {props.name}
                    option = {option}
                    
                    key = {idx}
                    value = {props.value}
                    updateFeature = {props.updateFeature}
                    selected = {props.selected.name}
                    />
                
              )}
            
                
        
          
        </fieldset>
    )
    
}

export default Feature
//                
