export const renderPlural = (
  count: number,
  singular: string,
  plural: string
): string => {
  if (!count) return ""
  const labelText = count === 1 ? singular : plural
  return `${count} ${labelText}`
}
