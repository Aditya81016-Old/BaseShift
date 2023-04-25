module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,ts,svelte,html}'],
    theme: {},
    variants: {},
    plugins: [],
    safelist: [
      {
        pattern: /bg-(slate|rose|teal|yellow|blue|indigo)-(500|800)/,  
      },
      {
        pattern: /(bg|text)-slate-(50|100|200|400|800|900)/,  
      },
    ],
  }
  