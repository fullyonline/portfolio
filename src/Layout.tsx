import React, { useCallback } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Particles from 'react-particles';
import { particleOptions } from './configs/ParticleOptions';
import { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

export function Layout(): JSX.Element {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
        <Box>
            <IconButton
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/projects">Projekte</Link>
                </MenuItem>
            </Menu>
            <hr />

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particleOptions as any}
            />
            <Outlet />
        </Box>
    );
}
