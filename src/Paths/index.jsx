import { BrowserRouter, Route, Routes } from "react-router";
import SiteLayout from "../SiteLayout";
import React, { Suspense } from "react";
import LoadingLogo from "../components/LoadingLogo";
const Home = React.lazy(() => import("../pages/Home"));
const AboutUs = React.lazy(() => import("../pages/AboutUs"));

const Paths = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingLogo />}>
                <Routes>
                    <Route path="/" element={<SiteLayout />}>
                        <Route index element={<Home />} />
                        <Route path="about-us" element={<AboutUs />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default Paths;