import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Layout } from './Layout';
import { About } from './About';
import { Projects } from './Projects';
import { NoMatch } from './NoMatch';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
