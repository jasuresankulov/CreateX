import { useLocation, Route, Routes } from "react-router-dom"
import Navigation from "./Navigation"
import About from "./About"
import Services from "./Servicess";
import Work from "./Work";
import Contacts from "./Contacts";
import News from "./News";
import MainPage from "./MainPage";





function AllComponents(props) {
    const location = useLocation()
    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigation />}>
                <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/contacts" element={<Contacts />} />


                </Route>
            </Routes>

        </>
    );
}

export default AllComponents;