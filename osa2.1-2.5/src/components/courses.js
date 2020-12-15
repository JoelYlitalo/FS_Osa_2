import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h2>{props.course}</h2>
    </div>
  )
}

const Part = (props) => {
	
  return (
    <p>
      {props.part} {props.ex}
    </p>
    )
}

const Content = (props) => {
  console.log('Content..',props)
  return (
    
    <div>
      {props.courses.parts.map(course =>

      	<Part key={course.id} part={course.name} ex={course.exercises} />
      	)}
    </div> 
    
    )
} 

const Total = (props) => {
  const total = props.total.parts
  .map(part => part.exercises)

  .reduce((s,p) => s + p)
	return (
		<h3>
		total of {total} exercises
		</h3>
		)
}

const Course = (props) => {
	console.log('Course:', props)
  return (
	<div>
	  <Header course={props.name} />
      <Content courses={props.courses}/>
      <Total total={props.total}/>
	</div>
  )
}


const AllCourses = (props) => {

	return (
		<div>
		{props.data.map(c =>
			<Course key={c.id} name={c.name} courses={c} total={c}/>
			)}
		</div>
		)
}

export default AllCourses