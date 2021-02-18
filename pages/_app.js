import "../styles/globals.css";
import "../styles.css";

import store from "./../src/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "theme-ui";
import theme from "../src/utils/theme";
import { Provider as AuthProvider } from "next-auth/client";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AuthProvider session={pageProps.session}>
          <Component {...pageProps} />
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
