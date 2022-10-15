import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Home } from './pages';

const App = () => {


    return (
    <div style={{fontFamily: "Roboto"}}>

        <BrowserRouter>
            <div className="flex">
            <div>

                <Routes>

                    <Route path="/" element={<Home />} />

                </Routes>
            </div>
            </div>
   
        </BrowserRouter>
    </div>
  )
}

export default App