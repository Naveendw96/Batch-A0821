import './App.css';
import HelloWorld from './components/HelloWorld.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Count from './components/Count.js';
import Example from './components/Example';

function App() {
  const varname = {
    namer:"Nikil",
    title:"agarwal"
  }
  return (
    <div >
      <Header/>
      {/* <HelloWorld name="Naveen Dasitha" title="I love React"/> */}
      <HelloWorld h={varname} hh="I love React"/>
      <Count/>
      <Example/>
      <Footer/>
    </div>
  );
}

export default App;
