import { render, screen } from "@testing-library/react"
import { ReadMore } from "../ReadMore"

describe("ReadMore", () => {
  it("should render", () => {
    render(<ReadMore readMore description="Description" />)

    expect(screen.getByText(/description/i)).toBeVisible()
  })
})
