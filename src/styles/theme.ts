import { createTheme } from '@mui/material';

export const theme = createTheme({
    components: {
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
