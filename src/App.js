import React, {useState} from 'react';
import './App.css';
import BioDataForm from './components/BioDataForm';
import dietImg from './assets/diet3.svg';

function App() {
  const [showForm, setShowForm] = useState(false);
      const handleGetStarted = () => {setShowForm(true);};
  return (
    
    <div className="min-vh-100 ">
    <nav className="navbar navbar-expand-lg navbar-dark text-white" style={{backgroundColor:'#121f57'}}>
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link text-white fonttype mx-4" href="/">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fonttype mx-4" href="/">FEATURES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fonttype mx-4" href="/">PRICING</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="landing-page">
      <div className="background-image"></div>
      <div className="container content">
        {!showForm ? (
          <div>
            
          <div className="text-section">
            <h1 className="fonttype mb-1">DIET WIZARD</h1>
            <img src={dietImg} alt="diet" className="w-25"/>
            <p className="body-font"><h5>Simplifies healthy eating by providing personalized guidance based<br/>
               on your unique needs, ensuring a balanced diet tailored to your goals.<br/>
                Whether you want to maintain, gain, or lose weight, this app helps you <br/>
                make informed choices for a healthier lifestyle.</h5></p>
            <button className="btn text-white" style={{backgroundColor:"#121f57"}}
             onClick={handleGetStarted}>Get Started</button>
          </div></div>
        ) : (
          <BioDataForm /> // Your analysis form component
        )}
      </div>
      <div id="footer">
        <div className="text-center text-white " style={{backgroundColor:"#121f57"}}>
          <p>
            &copy; 2024 Diet Wizard.
          </p>
        </div>
    </div>
    </div>
  </div>
);
}

export default App;
