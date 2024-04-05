import { render, screen } from "@testing-library/react"
import { HolidayFeed } from "../HolidayFeed"
import { holidays } from "../../mocks/data/holidays"
import { useHolidayFilters } from "../../hooks/useHolidayFilters"

jest.mock("../HolidayCard", () => ({
  HolidayCard: () => <div data-testid="holiday-card" />,
}))

jest.mock("../../hooks/useHolidayFilters", () => ({
  useHolidayFilters: jest.fn(),
}))

describe("HolidayFeed", () => {
  const setup = () => {
    ;(useHolidayFilters as jest.Mock).mockReturnValue({ holidays })

    return render(<HolidayFeed />)
  }
  it("should render the correct amount of cards", () => {
    setup()

    expect(screen.getAllByTestId("holiday-card")).toHaveLength(holidays.length)
  })
})
