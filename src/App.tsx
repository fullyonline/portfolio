import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Layout } from './Layout';
import { Projects } from './components/Projects';
import { NoMatch } from './components/NoMatch';
import { Box } from '@mui/material';
import { Work } from './components/Work';
import { Impressum } from './components/Impressum';

function App() {
    return (
        <>
            <Box>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="work" element={<Work />} />
                        <Route path="impressum" element={<Impressum />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>
            </Box>
        </>
    );
}

export default App;
