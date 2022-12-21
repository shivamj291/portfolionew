import logo from './logo.svg';
import './App.css';
import Contact from './component/Contact/Contact';
import Navbar from './component/navbar/navbar';
import Project from './component/Project/Project';
import About from './component/About/About';
import Skill from './component/Skills/Skill';
import Front from './component/Front/Front';
import Contribution from './component/Contrubution/Contrubution';
import Static from './component/Statics/Statics';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Front/>
      <About/>
      <Skill/>
      <Project/>
      <Contribution/>
      <Static/>
      <Contact/>
    </div>

  );
}

export default App;
