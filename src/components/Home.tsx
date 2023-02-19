import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { flexbox, innerFlexbox, portrait } from '../styles/styles';

export function Home(): JSX.Element {
    return (
        <Box className={flexbox}>
            <Card className={innerFlexbox}>
                <Typography variant={'h2'}>Romano Sabbatella</Typography>
                <img src="portrait.jpg" className={portrait} alt={'Portrait von Romano Sabbatella'} />
                <Typography variant={'h4'}>Fullstack Web Developer</Typography>
                <Typography variant={'h5'}>im Gesundheitswesen</Typography>
            </Card>
        </Box>
    );
}
