import React, { useState } from 'react'
import Tweet from './Tweet'

function App() {
  const [users, setUser] = useState([
    { name: 'Bogdan', message: 'Hello there' },
    { name: 'John', message: 'i am John Snow' },
    { name: 'traversy', message: 'i am awesome' }
  ])
  
  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  )
}

export default App