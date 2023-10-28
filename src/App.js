import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;


