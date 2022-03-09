import React from 'react'

export const Members = (props) => {
    const {name,age,handleTransfer}=props;
  return (
    <div>
        <span>name: {name}</span>-<span>age: {age}</span>{" - "}
        <button onClick={()=>handleTransfer()}>transfer</button>
    </div>
  )
}
