import { BrowserRouter, Route, Routes } from "react-router";
import SiteLayout from "../SiteLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about-us" element={<AboutUs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;