import { Filters } from "../types/filters"

export const formatLabel = (label: Filters) => {
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
