/**
 * Composable for confetti animation effects
 * Provides colors and styles for animated confetti particles
 */
export const useConfetti = () => {
  // Confetti color palette - these colors are safelisted in tailwind.config.js
  const confettiColors = [
    'yellow-400',
    'pink-400', 
    'blue-400',
    'green-400',
    'purple-400',
    'red-400'
  ]

  // Generate random styles for confetti particles
  const generateConfettiStyles = (count: number = 50) => {
    return Array.from({ length: count }, () => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 2}s`
    }))
  }

  // Get a random color from the palette
  const getRandomColor = () => {
    return confettiColors[Math.floor(Math.random() * confettiColors.length)]
  }

  // Get color by index (useful for v-for loops)
  const getColorByIndex = (index: number) => {
    return confettiColors[index % confettiColors.length]
  }

  return {
    confettiColors,
    generateConfettiStyles,
    getRandomColor,
    getColorByIndex
  }
}
