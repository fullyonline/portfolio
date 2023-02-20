import React from 'react';
import { Box, Card, CardContent, Chip, Typography } from '@mui/material';
import { flexboxLeft, fullWidth, githubLogo, innerFlexbox } from '../styles/styles';
import { PROJECT_TYPE_TYPE, projects } from '../data/projects';

export function Projects(): JSX.Element {
    return (
        <Box className={fullWidth}>
            {projects.map((project) => {
                return (
                    <Card key={project.name}>
                        <CardContent>
                            <Box className={innerFlexbox}>
                                <Typography variant={'h4'}>{project.name}</Typography>
                                <Typography variant={'h6'}>
                                    {project.type === PROJECT_TYPE_TYPE.school ? 'Schulprojekt' : 'Arbeitsprojekt'}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography>
                                    <strong>Beschreibung:</strong>
                                </Typography>
                                <Typography>{project.description}</Typography>
                                <ul>
                                    {project.keypoints.map((key) => {
                                        return <li key={key}>{key}</li>;
                                    })}
                                </ul>
                                <Box className={flexboxLeft}>
                                    {project.programminglanguages.map((lang) => {
                                        return <Chip key={lang} label={lang} variant="outlined" />;
                                    })}
                                    {project.url ? (
                                        <a href={project.url} target="_blank" rel="noreferrer noopener">
                                            <img className={githubLogo} src={'github.svg'} alt={'Github Logo'} />
                                        </a>
                                    ) : (
                                        <></>
                                    )}
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                );
            })}
        </Box>
    );
}
