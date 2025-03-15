"use client";

import Image from "next/image";
import styles from "./page.module.css";
import PixelatedImage from "./components/PixelatedImage/page";
import ContactLinks from "./components/contactlinks";
import ReactLenis from "@studio-freight/react-lenis";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

export default function Home() {

  return (
    <ReactLenis root>
  <div className= "hero-wrapper">
    <div className="hero-container" id="hero">
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
        <ContactLinks />
      </div>
      <div className="info">
        <h2>[ Documents ]</h2>
        <div className="info-text">
          <a href="/Devansh_Ohri_CV.pdf" target="_blank"><p>CV</p></a>
        </div>
      </div>
    </div>
    <div className="work-wrapper" id="work">
      <h1>[ Selected Work ]</h1>
      <div className="work-container">
        <div className="work">
          <div className="work-info">
            <div className="work-title">
              <h2>[ 01 ]</h2>
              <h1>Interactive Darts Bar- Website Redesign</h1>
            </div>
            <div className="work-desc">
            <ul>
              <li><p>UX/UI Design</p></li>
              <li><p>Visual Direction</p></li>
              <li><p>Branding</p></li>
              <li><p>Webflow Development</p></li>
            </ul>
            </div>
            <button className="work-view-btn">
              <p>VIEW PROJECT →</p>
            </button>
          </div>
          <div className="work-image">
            <img src="/Flyers1.png" alt="" />
          </div>
        </div>

        <div className="work">
          <div className="work-info">
            <div className="work-title">
              <h2>[ 02 ]</h2>
              <h1>Hexabot- UX Challenge</h1>
            </div>
            <div className="work-desc">
            <ul>
              <li><p>UX/UI Design</p></li>
              <li><p>Visual Direction</p></li>
              <li><p>Branding</p></li>
              <li><p>Interaction Design</p></li>
            </ul>
            </div>
            <button className="work-view-btn">
              <p>VIEW PROJECT →</p>
            </button>
          </div>
          <div className="work-image">
            <img src="/Screen.png" alt="" />
          </div>
        </div>

        <div className="work">
          <div className="work-info">
            <div className="work-title">
              <h2>[ 03 ]</h2>
              <h1>Furniture App- UX Challenge</h1>
            </div>
            <div className="work-desc">
            <ul>
              <li><p>UX/UI Design</p></li>
              <li><p>Visual Direction</p></li>
              <li><p>Interaction Design</p></li>
            </ul>
            </div>
            <button className="work-view-btn">
              <p>VIEW PROJECT →</p>
            </button>
          </div>
          <div className="work-image">
            <img src="/Furniture.png" alt="" />
          </div>
        </div>

        <div className="work">
          <div className="work-info">
            <div className="work-title">
              <h2>[ 04 ]</h2>
              <h1>Yle Pienet Koneet- Title Animation</h1>
            </div>
            <div className="work-desc">
            <ul>
              <li><p>Motion Design</p></li>
              <li><p>Visual Direction</p></li>
              <li><p>Branding</p></li>
            </ul>
            </div>
            <button className="work-view-btn">
              <p>VIEW PROJECT →</p>
            </button>
          </div>
          <div className="work-image">
            <img src="/PienetKoneet.jpeg" alt="" />
          </div>
        </div>

        <div className="work">
          <div className="work-info">
            <div className="work-title">
              <h2>[ 05 ]</h2>
              <h1>Bluuman- Promo Video</h1>
            </div>
            <div className="work-desc">
            <ul>
              <li><p>Motion Design</p></li>
              <li><p>Visual Direction</p></li>
              <li><p>Branding</p></li>
            </ul>
            </div>
            <button className="work-view-btn">
              <p>VIEW PROJECT →</p>
            </button>
          </div>
          <div className="work-image">
            <img src="/Bluuman.png" alt="" />
          </div>
        </div>

        <div className="work">
          <div className="work-info">
            <div className="work-title">
              <h2>[ 05 ]</h2>
              <h1>Illvzn x OTB- Promo Video</h1>
            </div>
            <div className="work-desc">
            <ul>
              <li><p>Motion Design</p></li>
              <li><p>Visual Direction</p></li>
              <li><p>Branding</p></li>
            </ul>
            </div>
            <button className="work-view-btn">
              <p>VIEW PROJECT →</p>
            </button>
          </div>
          <div className="work-image">
            <img src="/Illvzn.png" alt="" />
          </div>
        </div>

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
  </ReactLenis>
);
}
