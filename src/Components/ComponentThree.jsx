import React from 'react'

export default function ComponentTwo() {
    return(
        <ComponentThree firstname={{ name: "A first name", number: 1 }} secondname={{ name: "A second name", number: 2 }} />
    );
}


function ComponentThree({firstname, secondname}) {
  return (
    <div><p>{firstname}</p>
    <p>{secondname}</p>
    </div>
  )
}

