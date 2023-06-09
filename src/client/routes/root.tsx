import "./root.css";

import { useState } from "react";
import { Router, Link } from "react-router-dom"
import navbar from "./navbar/navbar";
import reactLogo from "../assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="App-landing-hook">
        <img src="src/client/assets/frusterated_outside.png"></img>
        <h1>Tired of waiting for apartment buzz-ins?</h1>
      </div>

{/*   THIS IS THE WAVE */}
      <div style={{height: "150px", overflow: "hidden", marginTop: '-50px'}} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M0.00,49.99 C107.50,145.56 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#3e99a3"}}></path>
        </svg>
      </div>
      <div className="App-landing-steps">
        <div className="App-landing-steps__item">
          <img src="src/client/assets/handingphoneout.png"></img>
          <h2>1. We give you a dedicated phone number</h2>
        </div>
        <div className="App-landing-steps__item">
          <img src="src/client/assets/intercom.png"></img>
          <h2>2. Hook up your FastEntry number to your front door intercom system.</h2>
        </div>
        <div className="App-landing-steps__item">
          <img src="src/client/assets/answeringrobot.png"></img>
          <h2>3. FastEntry will automatically pick up the call and open the door instantly.</h2>
        </div>
      </div>




    <h1>🚪 Dial. <s>Wait.</s> Open. 🚪</h1>
    <p>Sick of waiting around for someone to buzz you into your apartment building?
      We'll get you a unique number with a automated butler that will instantly press 9 when you call!</p>
    <h2>Here's how it works:</h2>
    <ol>
      <li>Sign up for our monthly subscription and receive a dedicated phone number.</li>
      <li>Hook up your FastEntry number to your front door intercom system.</li>
      <li>When you arrive at your building, simply dial your FastEntry number from the bottom of the apartment building.</li>
      <li>FastEntry will automatically pick up the call and dial "9" to open the door instantly.</li>
    </ol>
    <p>No more waiting for someone to hear the intercom and buzz you in! With FastEntry, you're in control.</p>
    <h3>Benefits of FastEntry:</h3>
    <ul>
      <li><strong>⚡ Lightning-Fast Access:</strong> Skip the delays and gain instant access with just a tap of your finger.</li>
      <li><strong>⏰ Save Time:</strong> No more standing outside waiting for someone to let you in. Get in and get on with your day.</li>
      <li><strong>🔒 Secure and Private:</strong> Enjoy the peace of mind knowing that only authorized individuals can enter your building.</li>
      <li><strong>💡 Easy Setup:</strong> Our user-friendly platform makes connecting your FastEntry number a breeze.</li>
    </ul>
    <p>Join the FastEntry revolution today and experience the convenience of swift access to your building. Sign up now and start enjoying a faster, smarter way to enter your apartment!</p>

    <Link to={'/faq'} className="btn">FAQs</Link>
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
