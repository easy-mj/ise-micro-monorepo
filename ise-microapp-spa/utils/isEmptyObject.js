export const isEmptyObject = (obj) => {
  if (obj === undefined || obj === null) return true
  return Object.keys(obj).length === 0
}
