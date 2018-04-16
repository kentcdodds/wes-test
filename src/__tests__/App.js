import React from 'react'
import {render, Simulate} from 'react-testing-library'
import MutationMock from '../Mutation'
import App from '../App'

// NOTE: this is only required because the module we're mocking is not in node_modules
// if it were, then the mock would be picked up automatically.
jest.mock('../Mutation')

test('handles resetMutation', () => {
  // this bit could be done however you choose. Could do all this logic in the mock file.
  // I prefer the current setup because it provides more flexibilty to the user of the mock.
  const resetMutationSpy = jest.fn()
  MutationMock.__mock.modifyRenderPropArgs = (resetMutation, ...remainingArgs) => [
    resetMutationSpy,
    ...remainingArgs,
  ]

  const {container} = render(<App />)
  const button = container.querySelector('button')
  Simulate.click(button)
  expect(resetMutationSpy).toHaveBeenCalledTimes(1)
  expect(resetMutationSpy).toHaveBeenCalledWith('hey')
})
