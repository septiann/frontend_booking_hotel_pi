import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from './index'

test("Klik tombol tidak diizinkan jika properti isDisabled tersedia", () => {
    const { container } = render(<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test("Harus me-render loading atau spinner", () => {
    const { container, getByText } = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector("span")).toBeInTheDocument()
})

test("Harus me-render tag <a>", () => {
    const { container } = render(<Button type="link" isExternal></Button>)

    expect(container.querySelector("a")).toBeInTheDocument()
})

test("Harus me-render component <Link> ", () => {
    const { container } = render(<Router><Button href="" type="link"></Button></Router>)

    expect(container.querySelector("a")).toBeInTheDocument()
})