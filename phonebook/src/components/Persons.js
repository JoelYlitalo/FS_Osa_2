import React from 'react'

const Person = (props) => {
	return (
		<li>
		{props.person} {props.number}
		<button 
		type="button" 
		onClick={props.remove}
		value={props.value}
		>
		remove
		</button>
		</li>
		)
}

const AllPersons = (props) => {
	
	return (
		<ul>
			{props.set.map(p => 
				<Person 
				key={p.name} 
				person = {p.name} 
				number = {p.number}
				remove = {props.buttonFunction}
				value = {p.id} 
				/>
				)}
	    </ul>
		)
}

export default AllPersons