import { Route, Routes } from 'react-router-dom';
import About from './About';
import Aboutsnippet from './Aboutsnippet';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';
import Labs from './Labs';
import Projects from './Projects';
import Projectsnippet from './Projectsnippet';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<> <Home /> <Aboutsnippet/> <Projectsnippet/></>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/labs" element={<Labs/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    

  
    </div>
  );
}

export default App;
