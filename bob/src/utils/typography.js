import Typography from 'typography'

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Bitter",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Bitter", "serif"],
  googleFonts: [
    {
      name: 'Bitter',
      styles: [
        `400`,
        `400i`,
        '700',
      ],
    },
  ],
})

export default typography

export const rhythm = typography.rhythm