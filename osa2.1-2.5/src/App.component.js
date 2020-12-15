import React from 'react'
import AllCourses from './components/courses'


const App = (props) => {
  
  return (
    <div>
      <h1>Web development curriculum</h1>
      <AllCourses data={props.courses} />
      
    </div>
  )
}

export default App
