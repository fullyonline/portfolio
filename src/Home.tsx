import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { flexbox, innerFlexbox, portrait } from './styles/styles';

export function Home(): JSX.Element {
    return (
        <Box className={flexbox}>
            <Card className={innerFlexbox}>
                <Typography variant={'h1'}>Romano Sabbatella</Typography>
                <img src="portrait.jpg" className={portrait} alt={'Portrait von Romano Sabbatella'} />
                <Box>
                    <Typography variant={'h6'}>Fullstack Web Developer</Typography>
                    <Typography>im Gesundheitswesen</Typography>
                </Box>
            </Card>
        </Box>
    );
}
