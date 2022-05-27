import "../styles/globals.css";
import { Layout } from "../components/layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/theme";
import GlobalCSS from "../components/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
