import React from 'react'

function ComponentOne(myprop) {
  return (
    <div>
    <p>{myprop.firstname}</p>
    <p>{myprop.secondname}</p>
    <p>{myprop.birthdate}</p>
    </div>
  )
}

export default ComponentOne