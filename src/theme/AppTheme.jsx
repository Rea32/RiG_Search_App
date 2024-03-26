import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material"
import { RiGTheme } from "./RiGTheme";

export const AppTheme = ( { children } ) => {
  return (
    <ThemeProvider theme={ RiGTheme }>
        <CssBaseline/>
        { children }
    </ThemeProvider>
  )
}
