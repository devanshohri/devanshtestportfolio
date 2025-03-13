import Image from "next/image";
import styles from "./page.module.css";
import PixelatedImage from "./components/PixelatedImage/page";

export default function Home() {
  return (
  <div className= "hero-wrapper">
    <div className="hero-container">
      <div className="hero-top">
        <h1>I’m Devansh— a designer based in Helsinki.</h1>
      </div>
      <div className="hero-bottom">
        <h1>I craft clear, functional, and refined experiences across Analog and Digital.</h1>
        <div className="hero-img-container">
          <div className="hero-img-wrapper">
            <PixelatedImage src="/portrait.jpeg" blurrySrc="/devps.png" />
          </div>
        </div>
      </div>
    </div> 

    <div className="info-container">
      <div className="info">
        <h2>[ What I Love Doing ]</h2>
        <div className="info-text">
          <ul>
            <li><p>- Visual Design</p></li>
            <li><p>- Web Design</p></li>
            <li><p>- Product Design</p></li>
            <li><p>- Creative Development</p></li>
            <li><p>- Branding</p></li>
          </ul>
        </div>
      </div>
      <div className="info">
        <h2>[ Currently ]</h2>
        <div className="info-text">
          <p>Studying Media & Arts at
          Tampere University of Applied Sciences</p>
        </div>
      </div>
      <div className="info">
        <h2>[ Contact ]</h2>
        <div className="info-text">
          <ul>
            <li><p>Email</p></li>
            <li><p>LinkedIn</p></li>
            <li><p>Instagram</p></li>
          </ul>
        </div>
      </div>
      <div className="info">
        <h2>[ Documents ]</h2>
        <div className="info-text">
          <p>CV</p>
        </div>
      </div>
    </div>
    <div className="faq-container">
      <h2>[ Get to know me ]</h2>
      <div className="faq">
        <div className="faq-question"><h3>01 What is my favourite color?</h3></div>
        <div className="faq-answer"></div>
        </div>
      <div className="faq">
        <div className="faq-question"><h3>02 Where am I from?</h3></div>
        <div className="faq-answer"></div>
        </div>
      <div className="faq">
        <div className="faq-question"><h3>03 What else do I except design?</h3></div>
        <div className="faq-answer"></div>
        </div>
      <div className="faq">
        <div className="faq-question"><h3>04 What tools do I use? </h3></div>
        <div className="faq-answer"></div>
        </div>
    </div>
    <div className="text-block">
      <h1>
        No Gimmicks, <br />
        Just thoughtful design <br />
        "That works :) <br />
      </h1>
    </div>
  </div>
);
}
