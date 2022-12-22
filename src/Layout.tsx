import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export function Layout(): JSX.Element {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    <Link to="/about">Über mich</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/projects">Projekte</Link>
                </MenuItem>
            </Menu>
            <hr />
            <Outlet />
        </Box>
    );
}
