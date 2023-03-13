import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { flexbox, fullWidth, imageWidth3, innerFlexbox, mt1, pl1, portrait, pr1 } from '../styles/styles';
import { cx } from '@emotion/css';

export function Home(): JSX.Element {
    return (
        <Box className={flexbox}>
            <Card className={fullWidth}>
                <CardContent className={innerFlexbox}>
                    <Typography variant={'h2'}>Romano Sabbatella</Typography>
                    <img src="portrait.jpg" className={portrait} alt={'Portrait von Romano Sabbatella'} />
                    <Typography variant={'h4'}>Fullstack Web Developer</Typography>
                    <Typography variant={'h5'}>im Gesundheitswesen</Typography>
                    <Box className={cx(flexbox, mt1)}>
                        <Box className={cx(pl1, pr1)}>
                            <a
                                href={'https://www.linkedin.com/in/romano-sabbatella-b136641ab/'}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <img className={imageWidth3} src={'linkedin-72.png'} alt={'LinkedIn Logo'} />
                            </a>
                        </Box>
                        <Box className={cx(pl1, pr1)}>
                            <a href={'https://github.com/fullyonline'} target="_blank" rel="noreferrer noopener">
                                <img className={imageWidth3} src={'github.svg'} alt={'Github Logo'} />
                            </a>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
