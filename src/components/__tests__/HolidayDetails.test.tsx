import { render, screen } from "@testing-library/react"

import { holidays } from "../../mocks/data/holidays"
import { HolidayDetails } from "../HolidayDetails"

const mockHoliday = holidays[0]

describe("HolidayDetails", () => {
  it("should render the hotel details", () => {
    render(<HolidayDetails holiday={mockHoliday} />)

    expect(screen.getByText(mockHoliday.hotel.name)).toBeVisible()
    expect(screen.getByText(mockHoliday.hotel.location)).toBeVisible()
  })
})
