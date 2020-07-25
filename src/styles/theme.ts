const theme = {
  colors: {
    dark: "#312e38",
    yellow: "#F2C702",
    red: "#F52824",
    purple: "#761CF2",
    blue: "#1F83F2",
    white: "#FFF",
    grayLight: "#E6E9ED",
    green: "#E7F6E0",
    greenSecondary: "#96CA7F",
  },
  fonts: {
    families: {
      medium: "Roboto-Medium",
      regular: "Roboto-Regular",
      bold: "Roboto-Bold",
      light: "Roboto-Light",
    },
    sizes: {
      base: 24,
    },
  },
};

export type ThemeTypes = typeof theme;

export default theme;
