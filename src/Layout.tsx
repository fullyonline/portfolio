import React, { useCallback } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Particles from 'react-particles';
import { particleOptions } from './configs/ParticleOptions';
import { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { contentContainer, flexbox, flexboxRight, linkCssClass } from './styles/styles';

export function Layout(): JSX.Element {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
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
                </Box>

                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={particleOptions as any}
                />
                <Outlet />
            </Box>
        </Box>
    );
}
