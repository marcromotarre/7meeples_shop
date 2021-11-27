// src/utils/theme.js
/*export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 200,
    heading: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: 5,
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    p: {
      fontSize: 6,
      color: "body",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
};
*/

// src/utils/theme.js
export default {
  colors: {
    text: "#111",
    background: "#fff",
    primary: "tomato",
    secondary: "#3f3f3f",
    muted: "#e0e0e0",
    highlight: "#9f9f9f",
    gray: "#6c6c6c",
    accent: "#3f3f3f",
  },
  fonts: {
    body: "Quicksand",
  },

  containers: {
    page: {},
  },
  styles: {
    root: {
      h1: {
        fontSize: "24px",
        fontWeight: "bold",
        padding: "0",
        margin: "0",
        width: "fit-content",
      },
      h2: {
        fontSize: "20px",
        fontWeight: "400",
        padding: "0",
        margin: "0",
        width: "fit-content",
      },
      h3: {
        fontSize: "17px",
        fontWeight: "300",
        padding: "0",
        margin: "0",
        width: "fit-content",
      },
      h4: {
        fontSize: "15px",
        fontWeight: "200",
        padding: "0",
        margin: "0",
        width: "fit-content",
      },
      h5: {
        fontSize: "13px",
        fontWeight: "200",
        padding: "0",
        margin: "0",
        width: "fit-content",
      },
      p: {
        fontSize: "15px",
        fontWeight: "lighter",
        padding: "0",
        margin: "0",
        width: "fit-content",
      },
      span: {
        fontSize: "17px",
        fontWeight: "lighter",
        padding: "0",
        margin: "0",
        width: "fit-content",
      },
      // uses the theme values provided above
    },
  },
};
