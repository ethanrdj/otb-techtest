import { fireEvent, render, screen } from "@testing-library/react"

import { SortFilters } from "../SortFilters"
import { Filters } from "../../types/filters"

const mockOnChangeFilter = jest.fn()

describe("SortFilters", () => {
  it("should render", () => {
    render(
      <SortFilters
        selectedFilter={Filters.ALPHABETICAL}
        onChangeFilter={mockOnChangeFilter}
      />
    )

    expect(screen.getByText(Filters.ALPHABETICAL)).toBeVisible()
    expect(screen.getByText(Filters.PRICE)).toBeVisible()
    expect(screen.getByText(Filters.STAR)).toBeVisible()
  })

  it("should call onChangeFilter to sort alphabetically", () => {
    render(
      <SortFilters
        selectedFilter={Filters.PRICE}
        onChangeFilter={mockOnChangeFilter}
      />
    )

    fireEvent.click(screen.getByText(Filters.ALPHABETICAL))

    expect(mockOnChangeFilter).toHaveBeenCalledWith(Filters.ALPHABETICAL)
  })

  it("should call onChangeFilter to sort by price", () => {
    render(
      <SortFilters
        selectedFilter={Filters.ALPHABETICAL}
        onChangeFilter={mockOnChangeFilter}
      />
    )

    fireEvent.click(screen.getByText(Filters.PRICE))

    expect(mockOnChangeFilter).toHaveBeenCalledWith(Filters.PRICE)
  })

  it("should call onChangeFilter to sort by star rating", () => {
    render(
      <SortFilters
        selectedFilter={Filters.ALPHABETICAL}
        onChangeFilter={mockOnChangeFilter}
      />
    )

    fireEvent.click(screen.getByText(Filters.STAR))

    expect(mockOnChangeFilter).toHaveBeenCalledWith(Filters.STAR)
  })
})
