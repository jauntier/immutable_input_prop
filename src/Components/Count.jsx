import React from 'react'
import { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);
const addOne = () =>{
    setCount(count + 1)
}
const subtractOne = () =>{
    setCount(count - 1)
}
  return (
    <div>
        <p className="bg-blue-500 text-white py-2 px-4 rounded-md">Color is {count}</p>
        <button onClick={addOne} className="bg-blue-500 text-white py-2 px-4 rounded-md">Add One</button>
        <button onClick={subtractOne} className="bg-blue-500 text-white py-2 px-4 rounded-md">Subtract One</button>
    </div>

  )

}

export default Count