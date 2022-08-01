import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#73C2FB",
      light: "#ffffff",
      dark: "#1565c0",
    },
  },
  typography: {
    button: {
      textTransform: "capitalize",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
