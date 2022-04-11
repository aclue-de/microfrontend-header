import { createTheme, adaptV4Theme } from "@mui/material";
export const theme = createTheme(adaptV4Theme({
    typography: {
        fontFamily: 'roboto',
        button: {
            textTransform: 'none',
        },
        h1: {
            fontSize: '1.5rem',
            fontWeight: 400,
            letterSpacing: '0em',
            lineHeight: 1.334,
        },
        h2: {
            fontSize: '1.25rem',
            fontWeight: 700,
            letterSpacing: '0.0075em',
            lineHeight: 1.6,
        },
        h3: {
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.00938em',
            lineHeight: 1.75,
        },
        h4: {
            fontSize: '0.875rem',
            fontWeight: 700,
            letterSpacing: '0.01071em',
            lineHeight: 1.43,
        },
        h5: {
            color: '#333',
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.00938em',
            lineHeight: 1.75,
            textTransform: 'uppercase',
        },
        htmlFontSize: 16,
    },
    props: {
        MuiButton: {
            size: 'small',
            variant: 'text',
        },
        MuiCheckbox: {
            size: 'small',
        },
        MuiChip: {
            size: 'small',
        },
        MuiIconButton: {
            size: 'small',
        },
        MuiTextField: {
            fullWidth: true,
            size: 'small',
            variant: 'outlined',
        },
    },
    overrides: {
        MuiTabs: {
            indicator: {
                backgroundColor: 'currentColor',
            },
        },
        MuiInputBase: {
            input: {
                lineHeight: 1,
            },
            // removes bottom border
            root: {
                '&&&:before': {
                    content: 'none',
                },
                '&&&:after': {
                    content: 'none',
                },
            },
        },
        MuiButton: {
            outlinedSizeLarge: {
                paddingTop: 5.5,
                paddingBottom: 5.25,
            },
            containedSizeLarge: {
                paddingTop: 6.5,
                paddingBottom: 6.25,
            },
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        MuiAlert: {
            message: {
                fontWeight: 700,
            },
        },
        MuiChip: {
            sizeSmall: {
                height: 28,
                padding: '0 10px',
            },
        },
    }
}));
