import { useCallback, useEffect, useMemo, useState } from "react"
import { Holiday } from "../types/holiday"
import { Filters } from "../types/filters"
import axios from "axios"

// This hook isn't really necessary in the context of this tech test as the return value isn't reused so the logic could remain in HolidayFeed, where it was orignially written.
// But I just wanted tidy it up and move it into a hook so I can at least show that I am able to test hooks as well as components
export const useHolidayFilters = () => {
  const [holidays, setHolidays] = useState<Holiday[]>([])
  const [filter, setFilter] = useState<Filters>(Filters.PRICE)
  const [ascendingOrder, setAscendingOrder] = useState(true)

  useEffect(() => {
    const source = axios.CancelToken.source()

    const fetchData = async () => {
      try {
        const response = await axios.get("/holidays", {
          cancelToken: source.token,
        })
        if (response) setHolidays(response.data)
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error(error)
        }
      }
    }

    fetchData()

    return () => {
      source.cancel("Operation cancelled")
    }
  }, [setHolidays])

  const toggleOrder = useCallback(() => {
    setAscendingOrder((prevOrder) => !prevOrder)
  }, [setAscendingOrder])

  const onChangeFilter = useCallback(
    (filter: Filters) => {
      setFilter(filter)
      toggleOrder()
    },
    [setFilter, toggleOrder]
  )

  const sortAlphabetically = useCallback(
    (a: Holiday, b: Holiday) =>
      (ascendingOrder ? 1 : -1) *
      a.hotel.name.localeCompare(b.hotel.name, "en", {
        sensitivity: "base",
      }),
    [ascendingOrder]
  )

  const sortByPrice = useCallback(
    (a: Holiday, b: Holiday) =>
      (ascendingOrder ? 1 : -1) * (parseInt(a.price) - parseInt(b.price)),
    [ascendingOrder]
  )

  const sortByStarRating = useCallback(
    (a: Holiday, b: Holiday) =>
      (ascendingOrder ? 1 : -1) * (b.hotel.starRating - a.hotel.starRating),
    [ascendingOrder]
  )
  const sortedHolidays = useMemo(() => {
    switch (filter) {
      case Filters.ALPHABETICAL:
        return holidays.sort(sortAlphabetically)
      case Filters.STAR:
        return holidays.sort(sortByStarRating)
      default:
        return holidays.sort(sortByPrice)
    }
  }, [filter, sortAlphabetically, sortByPrice, sortByStarRating, holidays])

  return { holidays: sortedHolidays, filter, onChangeFilter }
}
