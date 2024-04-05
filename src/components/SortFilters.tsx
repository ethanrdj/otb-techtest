import { FC, useCallback } from "react"
import { SortFilterItem } from "./SortFilterItem"
import {
  faArrowDownAZ,
  faSterlingSign,
  faStar,
} from "@fortawesome/free-solid-svg-icons"
import { Filters } from "../types/filters"
import { formatLabel } from "../utils/formatLabel"

type SortFiltersProps = {
  selectedFilter: Filters
  onChangeFilter: (filter: Filters) => void
}

export const SortFilters: FC<SortFiltersProps> = ({
  selectedFilter,
  onChangeFilter,
}) => {
  const isSelected = useCallback(
    (filter: Filters) => selectedFilter === filter,
    [selectedFilter]
  )
  return (
    <div>
      <SortFilterItem
        label={formatLabel(Filters.ALPHABETICAL)}
        icon={faArrowDownAZ}
        selected={isSelected(Filters.ALPHABETICAL)}
        onClick={() => onChangeFilter(Filters.ALPHABETICAL)}
      />
      <SortFilterItem
        label={formatLabel(Filters.PRICE)}
        icon={faSterlingSign}
        selected={isSelected(Filters.PRICE)}
        onClick={() => onChangeFilter(Filters.PRICE)}
      />
      <SortFilterItem
        label={formatLabel(Filters.STAR)}
        icon={faStar}
        selected={isSelected(Filters.STAR)}
        onClick={() => onChangeFilter(Filters.STAR)}
      />
    </div>
  )
}
