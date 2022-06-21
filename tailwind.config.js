module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'fondo-pax': 'url(/src/paxwall2.jpg)'
      }),
      fontFamily: {
        body: ['Montserrat']
      }
    },
  },
  plugins: [],
}
