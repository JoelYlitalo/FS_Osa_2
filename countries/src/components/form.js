import React from 'react'



const Form = (props) => {
	return (

        <div>
          find countries: <input value={props.value} onChange={props.handle} />
        </div>

		)
}

export default Form
