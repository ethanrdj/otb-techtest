import axios from "axios"
import { FC, useEffect, useState } from "react"
import { HolidayCard } from "./HolidayCard"
import styles from "../styles/HolidayFeed.module.scss"
import { Holiday } from "../types/holiday"

export const HolidayFeed: FC = () => {
  const [holidays, setHolidays] = useState<Holiday[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/holidays")
        setHolidays(response.data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (!holidays) return //TODO add loading state in
  return (
    <div className={styles.holidayFeed}>
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {holidays.map((holiday) => (
          <HolidayCard key={holiday.ID} holiday={holiday} />
        ))}
      </div>
    </div>
  )
}
