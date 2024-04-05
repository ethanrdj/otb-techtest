import { FC } from "react"
import { Holiday } from "../types/holiday"
import styles from "../styles/HolidayDetails.module.scss"

type GuestsProps = {
  guests: Holiday["guests"]
}

const renderPlural = (
  count: number,
  singular: string,
  plural: string
): string => {
  const labelText = count === 1 ? singular : plural
  return `${count} ${labelText}`
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
