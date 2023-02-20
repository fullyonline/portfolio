import { createTheme } from '@mui/material';

export const theme = createTheme({
    components: {
        MuiChip: {
            styleOverrides: {
                root: {
                    marginRight: '0.5rem',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                    paddingTop: '2rem',
                    paddingBottom: '2rem',
                    paddingLeft: '5rem',
                    paddingRight: '5rem',
                    marginBottom: '2rem',
                },
            },
        },
    },
});
