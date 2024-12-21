/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens:{
      ssm:"320px",
      sm:"375px",
      md:"768px",
      lg:"1024px",
      xlg:"1440px"
    },
  },
  plugins: [],
}

