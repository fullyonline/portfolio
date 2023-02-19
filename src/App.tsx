import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Layout } from './Layout';
import { Projects } from './Projects';
import { NoMatch } from './NoMatch';
import { Box } from '@mui/material';

function App() {
    return (
        <>
            <Box>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>
            </Box>
        </>
    );
}

export default App;
