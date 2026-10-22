import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import App from './App'

const meta = {
  component: App,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /explore vite/i })).toHaveAttribute(
      'href',
      'https://vite.dev/',
    )
  },
}

export const CounterIncrements: Story = {
  play: async ({ canvas, userEvent }) => {
    const counter = canvas.getByRole('button', { name: /count is 0/i })
    await userEvent.click(counter)
    await userEvent.click(counter)
    await expect(counter).toHaveTextContent('Count is 2')
  },
}

export const CssCheck: Story = {
  play: async ({ canvas }) => {
    const counter = canvas.getByRole('button', { name: /count is/i })
    // .counter gets border-radius 5px from App.css, so this fails if the stylesheet did not load.
    await expect(getComputedStyle(counter).borderRadius).toBe('5px')
  },
}
