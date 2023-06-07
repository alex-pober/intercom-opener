import "./root.css";

import { useState } from "react";
import { Router } from "react-router-dom"
import navbar from "./navbar/navbar";
import reactLogo from "../assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h1>🚪 Dial. <s>Wait.</s> Open. 🚪</h1>
      </div>

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
    <p><a href="#" className="btn">Sign up now!</a></p>

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
