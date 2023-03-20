const theme = {
  palette: {
    primary: {
      main: "#03074f"
    },
    secondary: {
      main: "#fff",
    }
  },
  typography: {
    h2: {
      color: "#03074f",
      fontSize: "2rem",
    },

    h4: {
      color: "white",
      fontSize: "1rem",
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
    inputLabel: {
      fontSize: "1rem",
      color: "#03074f",
      fontWeight: "bold",
    },
    navbar: {
      fontSize: "5rem",
    },
  }
}

export default theme;