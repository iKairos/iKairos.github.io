import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import AboutMe from "./components/main/AboutMe";
import Blogs from "./components/main/Blogs";
import Certificates from "./components/main/Certificates";
import Contact from "./components/main/Contact";
import Education from "./components/main/Education";
import Industry from "./components/main/Industry";
import Navbar from "./components/main/Navbar";
import Skills from "./components/main/Skills";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="inner1">
          <Navbar/> <br/><br/><br/>
          {/* Route Switches */}
          <Routes>
            <Route path = "/personal" exact element={<AboutMe/>}></Route>
            <Route path = "/education" exact element={<Education/>}></Route>
            {/*<Route path = "/whatido" exact element={<Skills/>}></Route>*/}
            <Route path = "/certificates" exact element={<Certificates/>}></Route>
            <Route path = "/industry" exact element={<Industry/>}></Route>
            <Route path = "/contact" exact element={<Contact/>}></Route>
          </Routes>
        </div>

        {/*<div className="inner2">
          <Profile/>
        </div>*/}
      </div>
    </Router>
  );
}

export default App;
