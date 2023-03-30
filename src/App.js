import React from "react";
import Contact from "./contactPage/Contact"
import Home from "./homePage/Home";
import { Route, Routes } from "react-router-dom";
import "./style.css"

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            
            <Routes>
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>

    );
}

export default App;