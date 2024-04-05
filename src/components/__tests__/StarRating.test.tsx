import { render, screen } from "@testing-library/react"
import { StarRating } from "../StarRating"

describe("StarRating", () => {
  it("should render the correct amount of stars", () => {
    const STAR_RATING = 3
    render(<StarRating rating={STAR_RATING} />)

    expect(screen.getAllByTestId("star-icon")).toHaveLength(STAR_RATING)
  })
})
