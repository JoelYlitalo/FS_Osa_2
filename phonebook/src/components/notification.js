import React from 'react'

const Notification = (props) => {
  if (props.message === null) {
    return null
  }

  if(props.color) {
  	return (
    <div className="error">
      {props.message}
    </div>
  )
  } else {
  	return (
    <div className="error2">
      {props.message}
    </div>
  )
  }

 
}

export default Notification