import { render, screen } from '@testing-library/react'
import { Example } from './Example'

describe('Home module', () => {
  test('Home renders correctly', async () => {
    render(<Example />)
    const textElement = await screen.findByText('Typography - MED')
    expect(textElement).toBeInTheDocument()
  })
})