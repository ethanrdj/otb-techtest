import { FC } from "react"
import { Holiday } from "../types/holiday"
import styles from "../styles/HolidayDetails.module.scss"
import { renderPlural } from "../utils/renderPlural"

type GuestsProps = {
  guests: Holiday["guests"]
}

export const Guests: FC<GuestsProps> = ({ guests }) => {
  const { adults = 0, children = 0, infants = 0 } = guests

  return (
    <p className={styles.holidayInfo}>
      {renderPlural(adults, "Adult", "Adults")},{" "}
      {renderPlural(children, "Child", "Children")}
      {!!infants && " & "}
      {renderPlural(infants, "Infant", "Infants")}
    </p>
  )
}
