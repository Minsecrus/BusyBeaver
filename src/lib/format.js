export function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value)
}

export function formatSpeed(value) {
  return value >= 1000 ? `${formatNumber(value)}x` : `${value}x`
}
