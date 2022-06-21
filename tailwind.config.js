module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'fondo-pax': 'url(/src/assets/img/paxwall2.jpg)'
      }),
      fontFamily: {
        body: ['Montserrat']
      }
    },
  },
  plugins: [],
}
