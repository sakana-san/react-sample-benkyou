import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  styles: {
    globa: {
      body: {
        backgroundColor: "orange.50",
        color: "gray.80"
      },
      p: {
        fontSize: {base: "md", "md": "lg"},
        lineHeight: "tall"
      }
    }
  }
});

export default theme;