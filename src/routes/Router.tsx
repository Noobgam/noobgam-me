import React, {FC} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {Home} from "./root/Home";
import {About} from "./about/About";
import {Languages} from "./languages/Languages";
import {AnimatePresence} from "framer-motion";

export const Router: FC<{}> = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode={"wait"}>
            <Routes location={location} key={location.pathname}>
                {<Route path="/" element={<Home/>}/>}
                {/*<Route path="/about" element={<About/>}/>*/}
                {/*<Route path="/languages" element={<Languages/>}/>*/}
            </Routes>
        </AnimatePresence>
    )
}
