/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Page from './page'

it('App Router: Works with Server Components', async () => {
  render(<Page />)
  expect(screen.getByText('Listado')).toBeInTheDocument()
  expect(screen.getByText('Tasks')).toBeInTheDocument()

  await userEvent.click(screen.getByText('Tasks'))
  console.log(window.location.href)
  

})
