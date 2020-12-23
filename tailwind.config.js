module.exports = ({ dev, rootDir, srcDir }) => ({
  theme: {},
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  purge: {
    enabled: !dev,
    content: [
      `${srcDir}/components/**/*.{vue,js}`,
      `${srcDir}/layouts/**/*.vue`,
      `${srcDir}/pages/**/*.vue`,
      `${srcDir}/plugins/**/*.{js,ts}`,
      `${rootDir}/nuxt.config.{js,ts}`
    ]
  }
})