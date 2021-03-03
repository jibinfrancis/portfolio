import logo from './logo.svg';
import './App.css';
import Developer from './components/assets/developer'

import NavBar from './components/navBar'
function App() {
  return (
    <div>
     <NavBar/>
     <div className="content">
       <div className="content-Container">
       <div className="contentHeader">
       <span>J</span><span>i</span><span>b</span><span>i</span><span>n</span><span>&nbsp;</span><span>F</span>
       <span>r</span><span>a</span><span>n</span><span>c</span><span>i</span><span>s</span>
       <p>Web developer</p>
       </div>
       <button className="contact"><span>Contact Me</span></button>
       </div>
       <div >
        <Developer/>
       </div>
     </div>
     {/* <div className="skills">
       <div className="skill-high">
         
+       </div>
     </div> */}
     
    </div>
  );
}

export default App;
