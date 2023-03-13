import React, { useCallback } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Particles from 'react-particles';
import { particleOptions } from './configs/ParticleOptions';
import { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { contentContainer, flexbox, flexboxRight, linkCssClass } from './styles/styles';

export function Layout(): JSX.Element {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Box className={flexbox}>
            <Box className={contentContainer}>
                <Box className={flexboxRight}>
                    <Link className={linkCssClass} to="/">
                        Home
                    </Link>
                    <Link className={linkCssClass} to="/projects">
                        Projekte
                    </Link>
                    <Link className={linkCssClass} to="/work">
                        Arbeit
                    </Link>
                    <Link className={linkCssClass} to="/impressum">
                        Impressum
                    </Link>
                </Box>
                <Particles id="tsparticles" init={particlesInit} options={particleOptions as any} />
                <Outlet />
            </Box>
        </Box>
    );
}
