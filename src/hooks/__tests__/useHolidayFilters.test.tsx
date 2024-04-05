import { act, renderHook } from "@testing-library/react"
import { useHolidayFilters } from "../useHolidayFilters"
import { Filters } from "../../types/filters"
import axios from "axios"
import { holidays } from "../../mocks/data/holidays"

jest.mock("axios")

describe("useHolidayFilters", () => {
  const setup = () => {
    ;(axios.get as jest.Mock).mockResolvedValue({
      holidays: { data: holidays },
    })
    const result = renderHook(useHolidayFilters)

    return result
  }

  it("should sort the holidays by price", async () => {
    const { result } = setup()

    act(() => {
      result.current.onChangeFilter(Filters.STAR)
    })

    expect(result.current.filter).toEqual(Filters.STAR)
  })

  it("should sort the holidays alphabetically", async () => {
    const { result } = setup()

    act(() => {
      result.current.onChangeFilter(Filters.ALPHABETICAL)
    })

    expect(result.current.filter).toEqual(Filters.ALPHABETICAL)
  })

  it("should sort the holidays by price", async () => {
    const { result } = setup()

    act(() => {
      result.current.onChangeFilter(Filters.ALPHABETICAL)
    })

    expect(result.current.filter).toEqual(Filters.ALPHABETICAL)

    act(() => {
      result.current.onChangeFilter(Filters.PRICE)
    })

    expect(result.current.filter).toEqual(Filters.PRICE)
  })
})
