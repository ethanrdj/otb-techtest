import { FC } from "react"
import styles from "../styles/HolidayCard.module.scss"

type ReadMoreProps = {
  readMore: boolean
  description: string
}

export const ReadMore: FC<ReadMoreProps> = ({ readMore, description }) => {
  return (
    <div
      className={`${styles.hotelDescription} ${
        readMore ? styles.slideDown : ""
      }`}
    >
      <h3>Overview</h3>
      <p>{description}</p>
    </div>
  )
}
