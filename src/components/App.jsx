import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./home/Home";
import OptionsPage from "./optionsPage/OptionsPage";
import SolvePattern from "./solvePattern/SolvePattern";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/solve" element={<OptionsPage></OptionsPage>}></Route>
                <Route path="/solve/pattern" element={<SolvePattern></SolvePattern>}></Route>
            </Routes>
        </Router>
    )
}

export default App;