import { useState } from "react";
import About from "./About";
import Interests from "./Intersets";
import Footer from "./Footer";
export default function Header() {
  const [count, setCount] = useState(0);

  return (
    <div className="Header-Container">
      <div className="Pic">
        <img src="src\assets\Hakeem.jpg" alt="" srcset="" />
      </div>
      <div className="Genrale-info">
        <h2>Hakeem Kadim</h2>
        <p>
          <span>Frontend Developer</span>
        </p>
        <p>HakeemKadim.com</p>
        <div className="buttons">
          <button type="button" id="b1">
            <a href="https://www.linkedin.com/in/abdelhakim-kadim-0484a0189/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
            Linkdin
          </button>
          <button type="button" id="b2">
            <a href="https://www.linkedin.com/in/abdelhakim-kadim-0484a0189/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
              </svg>
            </a>
            Email
          </button>
        </div>

        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}
