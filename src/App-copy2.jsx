import React from 'react'

const name = 'Adam';
const x = 79;
const y = 15;
const names = ['George', 'Paul', 'Ringo', 'John'];
const loggedIn = false;
const styles = {
  color: 'red',
  fontSize: '25px'
}

// if (loggedIn) {
//   return <h1>Hello Member</h1>;
// }

const App = () => {
  return (
    <>
      <div className="text-5xl">
        App
      </div>
      <p style={styles}>name: {name}</p>
      <p>The sum of {x} and {y} is {x + y}</p>
      <ul className="list-disc">
        { names.map((name_value, index) => (
          <li key={index}>{name_value}</li>
        ))}
      </ul>
      { loggedIn ? <h1>Hello Member</h1> : '' }
    </>
  )
}

export default App