import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, HomePage, LearnPage, PracticePage, CompetePage, MentorPage, BlogPage, Footer} from './components';


const App = () =>  (
    <BrowserRouter>
        <Box sx = {{ backgroundColor: '#fff'}}>
            <Navbar />
            <Routes>
                <Route path="/" exact element = {<HomePage />} />
                <Route path="/learn" element = {<LearnPage />} />
                <Route path="/practice" element = {<PracticePage />} />
                <Route path="/compete" element = {<CompetePage />}  />
                <Route path="/mentor" element = {<MentorPage />}  />
                <Route path="/blog" element = {<BlogPage />}  />
            </Routes>
            <Footer />
        </Box>
    </BrowserRouter>
  );


export default App