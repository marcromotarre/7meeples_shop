import "../styles/globals.css";
import "../styles.css";
/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import store from "../src/redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "theme-ui";
import theme from "../src/utils/theme";
import { Provider as AuthProvider } from "next-auth/client";
import Header from "src/components/header/header";
import Data from "src/components/data";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AuthProvider session={pageProps.session}>
          <Header></Header>
          <Data />
          <div sx={{ height: "50px" }}></div>
          <Component {...pageProps} />
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
