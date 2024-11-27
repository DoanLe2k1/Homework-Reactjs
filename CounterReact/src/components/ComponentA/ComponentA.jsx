import { useState } from 'react'
import ComponentB from '../ComponentB/ComponentB'

export default function ComponentA () {
  const [counter, setCounter] = useState(0)
  function increaseCounter () {
    setCounter(counter + 1)
  }
  return (
    <div>
      <div className="counter">Counter: {counter}</div>
      <button onClick={increaseCounter}>Click A</button>
      <ComponentB increaseCounter={increaseCounter}/>
    </div>
  )
}