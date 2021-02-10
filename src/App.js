import React from 'react'
import './App.css';
import JSXImage from './assets/jsx-src.png'


function App() {
  return (

    /**
     * HTML CODE  --> JSX CODE 
     * 
     * <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Your name here</h1>
    <br />
    <img src="/imageInSrc.jpg" />
    <br />
    <img src="/imageInPublic.jpg" />
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
     
     */



    <div className="App">
      

      <h1 className="title red">Nedra Chahed</h1>


      {/* ligne separation  */}
      <hr style={{ width: "80%" }} />
      {/* importing images  from src */}
      <h2 style={{ color: 'red' }} >importing images  from SRC</h2>
      <img className="jsx-logo" src={JSXImage} alt="JSX logo" style={{ width: "50%" }} />

      <br /><br /><br />
      <hr style={{ width: "80%" }} />


      {/* importing images  public */}
      <h2 style={{ color: 'bleu' }} >importing images from public </h2>

      <img src="/images/logo192.png" alt="React Logo" style={{ width: "20%" }} />
      <br /><br />
      <hr style={{ width: "80%" }} />


      {/* importing images  from URL */}
      <h2 style={{ color: 'yellow' }} >importing images  from URL</h2>
      <img
        className="react-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        alt="logo react"
      />
      <br />
      <hr style={{ width: "80%" }} />
      <br />
      {/* importing video from public */}
      <h2 style={{ color: 'green' }} >importing video </h2>

      <video width={320} height={240} controls>
        <source src="/images/myVideo.mp4" alt="video " type="video/mp4" />
      </video>



    </div>


  );
}

export default App;
