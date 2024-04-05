import { Filters } from "../types/filters"

export const formatLabel = (label: Filters) => {
  // this is to make sure the label says sort alphabetically as per the design
  if (label === Filters.ALPHABETICAL)
    return (
      <p>
        sort <strong>{label}</strong>
      </p>
    )

  return (
    <p>
      sort by <strong>{label}</strong>
    </p>
  )
}
