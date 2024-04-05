import { FC } from "react"
import { HolidayCard } from "./HolidayCard"
import styles from "../styles/HolidayFeed.module.scss"

import { SortFilters } from "./SortFilters"

import { useHolidayFilters } from "../hooks/useHolidayFilters"

export const HolidayFeed: FC = () => {
  const { holidays, filter, onChangeFilter } = useHolidayFilters()

  return (
    <div className={styles.holidayFeed}>
      <SortFilters selectedFilter={filter} onChangeFilter={onChangeFilter} />
      <div className={styles.holidaysStack}>
        {holidays.length > 0 &&
          holidays.map((holiday) => (
            <HolidayCard key={holiday.ID} holiday={holiday} />
          ))}
      </div>
    </div>
  )
}
