import React from 'react'

const Square = (props) => {
  return (
    <div 
      onClick={props.onClick}
      style={{
        border:"1px solid black",
        height:"120px",
        width:"120px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }}
      className='squares'>
        <h5>{props.value}</h5>
    </div>
  )
}

export default Square