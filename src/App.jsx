import "./app.scss";
import Test from "./Test";
("./Test.jsx");
import Navbar from "./components/navbar/Navbar";
import IntroPage from "./components/introPage/IntroPage";
import Parallaxs from "./components/parallaxs/Parallaxs";
import Work from "./components/work/Work";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="About">
        <Navbar />
        <IntroPage />
      </section>
      <section id="Work">
        <Parallaxs type="work" />
      </section>
      <section><Work/></section>
      <section id="Project">
        <Parallaxs type="project" />
      </section>
      <Project />
      <section id="Skills">
        <Skills/>
      </section>
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
