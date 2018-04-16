import React from 'react'
import Mutation from './Mutation'

// this alternative requires changing the source code for tests which some people frown upon...
// and in general I agree. I'd prefer to do the first solution, but this is effective.

const App = (props) => (
  <props.Mutation>
    {(resetMutation, {loading, error}) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>
      return <button onClick={() => resetMutation('hey')}>Click Me</button>
    }}
  </props.Mutation>
)
App.defaultProps = {Mutation}

export default App
