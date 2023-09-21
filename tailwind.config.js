/** @type {import('tailwindcss').Config} */
module.exports = {
  content :
          [
            './pages/**/*.{js,ts,jsx,tsx,mdx}',
            './components/**/*.{js,ts,jsx,tsx,mdx}',
            './app/**/*.{js,ts,jsx,tsx,mdx}',
          ],
  theme : {
    screens : {
      'sm' : '640px',
      // 'md': '768px', tablet
      // 'lg': '1024px', laptop
      'mobile-sm' : '320px',
      'mobile-md' : '375px',
      'mobile-lg' : '425px',
      'tablet' : '768px',
      'laptop' : '1024px',
      'xl' : '1280px',
      'laptop-lg' : '1440px',
      '2xl' : '1536px',
      'desktop' : '2560px',
    },
  },
  plugins : []
}
