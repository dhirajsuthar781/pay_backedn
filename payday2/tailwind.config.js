
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      title: "20px",
      subtitle: "17.5px",
      description: "14px",

    },

    colors: {
      'primary': "#00B1A4",
      "seconday": "#272727",
      'white': '#ffffff',
      'gradfrom':"#00B1A4",
      'gradto':"#57CDD9",
      'onhov':"#c5fffb",
      
    },


    fontFamily: {
      Montserrat: ['Poppins', "sans-serif"],
      Varela: ['Varela', "sans-serif"],

    },
  },
  plugins: [],
};

// colors: {
  // 'primary': "#525CEB",
  // "seconday": "#211C6A",
  // 'white': '#ffffff',
  // 'gradfrom':"#525CEB",
  // 'gradto':"#8696FE",
  // 'onhov':"#EEF5FF",
// },