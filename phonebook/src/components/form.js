import React from 'react'

const PersonForm = (props) => {
	return (
		<div>
		<form onSubmit={props.addName}>
        <div>
          name: <input value={props.newName} onChange={props.handlenameChange}/>
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handlenumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
		</div>
		)
}

export default PersonForm