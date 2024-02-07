import React from 'react'

const ClickfFunction = () => {
    const clickHandler=()=>{
        console.log("Functional Click")
    }
  return (
    <div>
        <button onClick={clickHandler}>Functional Click Function</button>
    </div>
  )
}

export default ClickfFunction