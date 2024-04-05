import { FC, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Holiday } from "../types/holiday"
import { HolidayDetails } from "./HolidayDetails"
import styles from "../styles/HolidayCard.module.scss"
import { ReadMore } from "./ReadMore"

type HolidayCardProps = {
  holiday: Holiday
}

export const HolidayCard: FC<HolidayCardProps> = ({ holiday }) => {
  const [readMore, setReadMore] = useState<boolean>(false)

  return (
    <div className={styles.holidayCard}>
      <div className={styles.mainCardView}>
        <img
          src={holiday.hotel.image}
          alt={`${holiday.hotel.name}`}
          className={styles.holidayImage}
        />
        <button
          className={styles.readMoreToggle}
          onClick={() => setReadMore(!readMore)}
          data-testid={styles.readMoreToggle}
        >
          <p>
            <strong>{readMore ? "Read less" : "Read more"}</strong> about this
            hotel
          </p>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={`${styles.chevronIcon} ${readMore ? styles.rotate : ""}`}
          />
        </button>

        <HolidayDetails holiday={holiday} />
      </div>

      <ReadMore readMore={readMore} description={holiday.hotel.description} />
    </div>
  )
}
