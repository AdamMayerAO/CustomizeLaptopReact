import React from 'react';
import slugify from 'slugify';
function FeatureOption (props) {
    
let itemHash = slugify(JSON.stringify(props.option))
    return(
        <div key={itemHash} className="feature__item">
            <input
                type="radio"
                id={itemHash}
                name={slugify(props.option.name)}
                className = "feature__option"
                checked={props.option.name === props.selected} 
                onChange={e => props.updateFeature(props.featureName, props.option)}

            />
            <label htmlFor={itemHash} className="feature__label">
                {props.option.name} {props.option.cost}
            </label>
        </div>
    )
}

export default FeatureOption