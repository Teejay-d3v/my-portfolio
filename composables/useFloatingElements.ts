const basePositions = [
  { left: '7%', top: '18%' },
  { left: '18%', top: '72%' },
  { left: '31%', top: '34%' },
  { left: '43%', top: '84%' },
  { left: '57%', top: '16%' },
  { left: '69%', top: '64%' },
  { left: '82%', top: '29%' },
  { left: '92%', top: '76%' },
  { left: '12%', top: '45%' },
  { left: '38%', top: '10%' },
  { left: '73%', top: '45%' },
  { left: '88%', top: '9%' }
]

export const useFloatingElements = (count = 8, durationBase = 15, delayBase = 0.45) => {
  return basePositions.slice(0, count).map((position, index) => ({
    id: index,
    style: {
      ...position,
      animation: `float ${durationBase + index * 2}s linear infinite`,
      animationDelay: `${index * delayBase}s`
    }
  }))
}
