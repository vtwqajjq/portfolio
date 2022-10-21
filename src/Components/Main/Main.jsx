import React from 'react';
import Home from "../Sections/Home/Home";
import style from './Main.module.css'
import About from "../Sections/About/About";
import {Routes, Route} from "react-router-dom";

const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <Routes >
                    <Route path={'/'} element = {<Home />} />
                    <Route path={'/about'} element = {<About />} />
                </Routes>
            </div>
        </div>
    );
};

export default Main;