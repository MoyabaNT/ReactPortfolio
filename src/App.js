import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import MyExperience from "./components/MyExperience";
import MySocials from "./components/MySocials";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import ContactMeHere from "./components/ContactMeHere";
import ProjectExperience from "./components/ProjectExperience";
import { Route, BrowserRouter, Routes} from "react-router-dom";


function App() {
  return (
    <div >
        <NavBar />
        <Home />
      <MySocials />
      <AboutMe />
      <ProjectExperience />
      <Portfolio />
      <MyExperience />
      <ContactMeHere />
      <BrowserRouter>
      <Routes>
        <Route index="/home" element={<Home/>} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
