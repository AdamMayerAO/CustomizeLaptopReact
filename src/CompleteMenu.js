import React from 'react';
import Feature from './Feature';



function CompleteMenu (props) {
    return(
        <div className="main__form">
            <h1>
            Customize your Laptop
            </h1>
            {Object.keys(props.features).map((name, idx) => 
                <Feature 
                name = {name} 
                key = {idx} 
                value={props.features[name]} 
                updateFeature = {props.updateFeature}
                selected = {props.selected[name]}
                />

            )}
            
        </div>
    )
}
export default CompleteMenu
