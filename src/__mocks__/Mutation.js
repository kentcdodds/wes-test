import React from 'react'

const ActualMutation = require.requireActual('../Mutation').default

function MockMutation({children, ...props}) {
  return (
    <ActualMutation {...props}>
      {(...mutationArgs) =>
        children(...MockMutation.__mock.modifyRenderPropArgs(...mutationArgs))
      }
    </ActualMutation>
  )
}
MockMutation.__mock = {
  // just default it
  modifyRenderPropArgs: (...args) => args,
}

export default MockMutation
