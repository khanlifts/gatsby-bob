import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'
oceanBeachTheme.baseFontSize = '22'

const typography = new Typography(oceanBeachTheme)

export default typography

export const rhythm = typography.rhythm