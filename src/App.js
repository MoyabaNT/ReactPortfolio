import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import MyExperience from "./components/MyExperience";
import MySocials from "./components/MySocials";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import ContactMeHere from "./components/ContactMeHere";

function App() {
  return (
    <div >
        <NavBar />
        <Home />
      <MySocials />
      <AboutMe />
      <Portfolio />
      <MyExperience />
      <ContactMeHere />
    </div>
  );
}

export default App;
