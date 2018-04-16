import React from 'react'
import {render, Simulate} from 'react-testing-library'
import App from '../App.alternative'
import ActualMutation from '../Mutation'

test('handles resetMutation', () => {
  const resetMutationSpy = jest.fn()
  function MutationMock({children, ...props}) {
    return (
      <ActualMutation {...props}>
        {(resetMutation, ...remainingArgs) =>
          children(resetMutationSpy, ...remainingArgs)
        }
      </ActualMutation>
    )
  }

  const {container} = render(<App Mutation={MutationMock} />)
  const button = container.querySelector('button')
  Simulate.click(button)
  expect(resetMutationSpy).toHaveBeenCalledTimes(1)
  expect(resetMutationSpy).toHaveBeenCalledWith('hey')
})
