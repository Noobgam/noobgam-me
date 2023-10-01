import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./root/Home";
import {About} from "./about/About";

export const Router: FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            {/*<Route path="playground" element={<Playground/>} />*/}
        </Routes>
    )
}
