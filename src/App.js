import React from 'react'
import Mutation from './Mutation'

const App = () => (
  <Mutation>
    {(resetMutation, {loading, error}) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>
      return <button onClick={() => resetMutation('hey')}>Click Me</button>
    }}
  </Mutation>
)

export default App
