import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, ReactNode } from "react"
import styles from "../styles/SortFilter.module.scss"

type SortFilterItemProps = {
  label: ReactNode
  icon: IconDefinition
  selected: boolean
  onClick: () => void
}

export const SortFilterItem: FC<SortFilterItemProps> = ({
  label,
  icon,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`${styles.sortFilterItem} ${selected ? styles.selected : ""}`}
      onClick={onClick}
    >
      {label}
      <FontAwesomeIcon
        icon={icon}
        className={`${styles.filterIcon} ${selected ? styles.selected : ""}`}
      />
    </div>
  )
}
