import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import React from "react";
import { Fade } from "../animations/Fade";

export const Layout = () => {
    return (
        <div className="h-full pb-5  text-slate-300 font-sans">
            {/*bg-slate-900*/}
            <div className="container mx-auto pb-5 mb-5">
                <Fade>
                    <Navbar />
                </Fade>
                <div className="px-5 my-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}