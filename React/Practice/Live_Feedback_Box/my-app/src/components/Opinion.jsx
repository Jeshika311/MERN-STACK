import React from 'react'

const Opinion = (props) => {
  return (
    <div className='opinion_div'>
      <input type='text' onChange={(e) => props.setText(e.target.value)}/>
      <p>Feedback : {props.Text}</p>
    </div>
  )
}

export default Opinion
