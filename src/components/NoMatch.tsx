import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { flexbox, innerFlexbox } from '../styles/styles';
import { css, cx } from '@emotion/css';

export function NoMatch(): JSX.Element {
    const style = css`
        margin-top: 20%;
    `;
    return (
        <Box className={cx(flexbox, style)}>
            <Card className={innerFlexbox}>
                <Typography variant={'h2'}>👇 Nichts zu sehen ausser den hier 👇</Typography>
            </Card>
        </Box>
    );
}
