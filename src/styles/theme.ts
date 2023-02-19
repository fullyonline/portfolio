import { createTheme } from '@mui/material';

export const theme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                    padding: '1rem',
                },
            },
        },
    },
});
