
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar.tsx";

import Home from "./pages/Home.tsx";
import Projects from "./pages/Project.tsx";


function app(){
    return(
        <Router>

            <Navbar />


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />


            </Routes>


        </Router>
    );
}

export default app;