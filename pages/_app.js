import "../styles/globals.css";

import store from "./../src/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "theme-ui";
import theme from "../src/utils/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
