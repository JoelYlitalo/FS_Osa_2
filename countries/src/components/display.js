import React from 'react'


const Country = (props) => {
	return (
		<li>
		{props.name} 
		</li>
		)
}


const Countries = (props) => {
	return (
		<li>
		{props.name} <button value={props.name} onClick={props.handle}> Look </button>
		</li>
		)
}


const OneCountry = (props) => {
	console.log(props)
	return (
		<div>
		<h2>{props.country.name}</h2>
		<p>capital {props.country.capital}</p>
		<p>population {props.country.population}</p>
		<h3>languages</h3>
		<ul>
			{props.country.languages.map(kieli =>
				<Country key={kieli.name} name={kieli.name} />
				)}
		</ul>
		<img alt="flag" src={props.country.flag} width="200" height="100" />
		</div>
		)
}





const Display = (props) => {
	
	const filtCount = props.content.filter((c) => {
    return c.name.toLowerCase().indexOf(props.search.toLowerCase()) >= 0
    })

    if(filtCount.length > 10) {

    	return (
    		<div>
    		Too many countries, please specify the search.
    		</div>
    		)

    } else if(filtCount.length > 1) {

    	return (
    		<ul>
		      {filtCount.map(maa =>
			  <Countries key={maa.name} name={maa.name} handle={props.handle} />
			  )}
		    </ul>
    		)

    } else if(filtCount.length === 1) {

    	return (
    		<div>
    		<OneCountry country={filtCount[0]} />
    		</div>
    		)

    } else {

    	return (
    		<div>
    		
    		</div>
    		)

    }
       
}

export default Display