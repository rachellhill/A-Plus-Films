import React from 'react'
import '../styles/Specs.css'


const Specs = (props) => {
  console.log(props)
    return (
        <div>
          <h5>Additional Information</h5>
          <ul>
            <li>Run Time: {props.specs.runtime} minutes</li>
            <li>Budget: {props.specs.budget ? props.specs.budget : 'unknown'}</li>
            <li>Revenue: {props.specs.revenue ? props.specs.revenue : 'unknown'}</li>
          </ul>
        </div>
    )
}

export default Specs