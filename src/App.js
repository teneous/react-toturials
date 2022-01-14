import './App.css';
import React from "react";
import Game from "./components/Game";
import {Route, Routes} from "react-router-dom"

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<Game/>}/>
            <Route exact path='/game' element={<Game/>}/>
        </Routes>
    );
}

export default App;
