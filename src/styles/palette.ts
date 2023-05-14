import { PaletteOptions } from "@mui/material";

type customPalette = {
    light: Omit<PaletteOptions, "mode">,
    dark: Omit<PaletteOptions, "mode">
}

export const palette: customPalette = {
    light: {
        // palette values for light mode
        primary: {
            main: 'rgb(233,64,87)'
        },
        secondary: {
            main: '#6D6D72'
        },
        text: {
            primary: '#3C3C43'
        },
        background: {
            paper: '#F6F6F7',
        },
        divider: '#DFDFD7'
    },
    dark: {
        // palette values for dark mode
        primary: {
            main: 'rgb(233,64,87)'
        },
        secondary: {
            main: '#9999A0'
        },
        text: {
            primary: '#DFDFD7'
        },
        background: {
            default: 'rgb(30, 30, 32)',
            paper: '#252529',
        },
        divider: 'black'
    }
}