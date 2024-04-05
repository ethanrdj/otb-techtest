import { render, screen } from "@testing-library/react"
import { Guests } from "../Guests"

describe("Guests", () => {
  it("should render the formatted single guest", () => {
    render(<Guests guests={{ adults: 1, children: 1, infants: 1 }} />)

    expect(screen.getByText(/adult/i)).toBeVisible()
    expect(screen.getByText(/child/i)).toBeVisible()
    expect(screen.getByText(/infant/i)).toBeVisible()
  })

  it("should render the formatted single guest", () => {
    render(<Guests guests={{ adults: 2, children: 2, infants: 2 }} />)

    expect(screen.getByText(/adults/i)).toBeVisible()
    expect(screen.getByText(/children/i)).toBeVisible()
    expect(screen.getByText(/infants/i)).toBeVisible()
  })

  it("should not render any infants", () => {
    render(<Guests guests={{ adults: 1, children: 1, infants: 0 }} />)

    expect(screen.getByText(/adult/i)).toBeVisible()
    expect(screen.getByText(/child/i)).toBeVisible()
    expect(screen.queryByText(/infant/i)).toBeNull()
  })
})
