import { FC } from "react"
import styles from "../styles/HolidayDetails.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

type StarRatingProps = { rating: number }

export const StarRating: FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className={styles.starRating}>
      {Array.from({ length: rating }).map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          color="#fedc07"
          data-testid="star-icon"
        />
      ))}
    </div>
  )
}
