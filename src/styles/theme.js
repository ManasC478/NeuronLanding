import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `"Inter", sans-serif`,
  },
  fontWeights: {
    thin: 100,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  styles: {
    global: {
      html: {
        minWidth: "360px",
        scrollBehavior: "smooth",
      },
    },
  },
});

export default theme;
