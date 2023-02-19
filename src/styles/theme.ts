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
                    width: '100%',
                    borderRadius: '10px',
                    padding: '1rem',
                },
            },
        },
    },
});
