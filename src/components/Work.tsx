import React from 'react';
import { Box, Card, CardContent, Chip, Typography } from '@mui/material';
import { flexboxLeft, fullWidth, innerFlexbox } from '../styles/styles';
import { WorkData } from '../data/work';

export function Work(): JSX.Element {
    return (
        <Box className={fullWidth}>
            {WorkData.map((work) => {
                return (
                    <Card key={work.company}>
                        <CardContent>
                            <Box className={innerFlexbox}>
                                <Typography variant={'h4'}>{work.positionDescription}</Typography>
                            </Box>
                            <Box>
                                <Typography>
                                    <strong>Beschreibung:</strong>
                                </Typography>
                                <Typography>{work.description}</Typography>
                                <ul>
                                    {work.competence.map((key) => {
                                        return <li key={key}>{key}</li>;
                                    })}
                                </ul>
                                <Box className={flexboxLeft}>
                                    {work.programminglanguages.map((lang) => {
                                        return <Chip key={lang} label={lang} variant="outlined" />;
                                    })}
                                    <a href={work.url} target="_blank" rel="noreferrer noopener">
                                        <Typography>{work.company}</Typography>
                                    </a>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                );
            })}
        </Box>
    );
}
