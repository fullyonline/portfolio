import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { flexbox, fullWidth, innerFlexbox, portrait } from '../styles/styles';

export function Home(): JSX.Element {
    return (
        <Box className={flexbox}>
            <Card className={fullWidth}>
                <CardContent className={innerFlexbox}>
                    <Typography variant={'h2'}>Romano Sabbatella</Typography>
                    <img src="portrait.jpg" className={portrait} alt={'Portrait von Romano Sabbatella'} />
                    <Typography variant={'h4'}>Fullstack Web Developer</Typography>
                    <Typography variant={'h5'}>im Gesundheitswesen</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
