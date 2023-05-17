import { useState } from 'react'
import PropTypes from "prop-types";

export const CounterApp = ({value}) =>{

  const [ counter, setCounter ] = useState(value)
  const handleAdd= ()=>{
    // setCounter(counter + 1);
    setCounter((c) => c+1)
  }
  const handleRemove= ()=>{ setCounter((c) => c-1) }
  const handleReseat= ()=>{ setCounter((c) => value) }
  return(
    <>
      <h1>Counter App</h1>
      <h2> {counter} </h2>
      <button onClick={  handleAdd }>+1</button>
      <button onClick={  handleRemove }>-1</button>
      <button aria-label="btn-reseat" onClick={  handleReseat }>Reseat</button>
    </>
  );
}


CounterApp.propType = {
  value: PropTypes.number
}
