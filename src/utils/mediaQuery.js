const breakpoints = { s: 576, m: 768, l: 1440 }
const mq = Object.entries(breakpoints).reduce(
  (acc, [key, bp]) => ({ ...acc, [key]: `@media (max-width: ${bp}px)` }),
  {}
)

export default mq
export { breakpoints }
