import { FC } from "react"
import { Holiday } from "../types/holiday"

import styles from "../styles/HolidayDetails.module.scss"
import { StarRating } from "./StarRating"
import { Guests } from "./Guests"

type HolidayDetailsProps = {
  holiday: Holiday
}

export const HolidayDetails: FC<HolidayDetailsProps> = ({ holiday }) => {
  return (
    <div className={styles.holidayDetails}>
      <h1 className={styles.hotelName}>{holiday.hotel.name}</h1>
      <p className={styles.hotelLocation}>{holiday.hotel.location}</p>
      <StarRating rating={holiday.hotel.starRating} />
      <div className={styles.infoContainer}>
        <Guests guests={holiday.guests} />
        <p className={styles.holidayInfo}>
          <strong>{holiday.date}</strong> for{" "}
          <strong>{holiday.stayDuration} days</strong>
        </p>
        <p className={styles.holidayInfo}>
          departing from <strong>{holiday.departureAirport}</strong>
        </p>
      </div>
      <button className={styles.bookButton}>
        <div>
          <h1>Book now</h1>
          <h1>{`£${holiday.price}`}</h1>
        </div>
      </button>
    </div>
  )
}
