import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SiteLayout } from './components/SiteLayout.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import CustomCake from './pages/CustomCake.jsx';
import Story from './pages/Story.jsx';
import Gallery from './pages/Gallery.jsx';
import Visit from './pages/Visit.jsx';
import './styles/tokens.css';
import './styles/global.css';
import './styles/components.css';
import './styles/pages.css';

function App(){return <BrowserRouter><SiteLayout><Routes>
<Route path="/" element={<Home/>}/><Route path="/menu" element={<Menu/>}/><Route path="/custom-cake" element={<CustomCake/>}/><Route path="/story" element={<Story/>}/><Route path="/gallery" element={<Gallery/>}/><Route path="/visit" element={<Visit/>}/><Route path="*" element={<Home/>}/>
</Routes></SiteLayout></BrowserRouter>}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);