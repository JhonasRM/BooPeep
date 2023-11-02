/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: { //Aqui se cria novas classes no Tailwind
      margin: { //Aqui se cria novos valores para margems
        '68': '17rem',
        '110': '34rem',
        '0-auto-imp': '0 auto !important'
      },
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')],
}

