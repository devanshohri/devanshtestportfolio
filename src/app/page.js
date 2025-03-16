"use client";

import Image from "next/image";
import styles from "./page.module.css";
import PixelatedImage from "./components/PixelatedImage/page";
import ContactLinks from "./components/contactlinks";
import ReactLenis from "@studio-freight/react-lenis";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useRef, useEffect } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const container = useRef(null);

  useGSAP(() => {
    // HERO & INFO HEADINGS (H2) ANIMATE TOGETHER ON LOAD
    gsap.from([".hero-top h1", ".hero-bottom h1", ".info h2"], {
      y: 50, // Only move down without opacity change
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
    });

    // INFO-TEXT (Now Animates Separately)
    gsap.utils.toArray(".info-text").forEach((text) => {
      gsap.from(text, {
        opacity: 0, // Text will fade in smoothly
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // WORK SECTION ANIMATION (Smooth & No Opacity Flickering)
    gsap.utils.toArray(".work").forEach((work, i) => {
      gsap.fromTo(
        work,
        { y: 50 },
        {
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: work,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
            scrub: 0.5,
          },
        }
      );
    });

    // WORK IMAGES REVEAL EFFECT
    gsap.utils.toArray(".work-image img").forEach((img) => {
      gsap.from(img, {
        opacity: 0,
        scale: 1.1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

  }, [container]);

  return (
    <ReactLenis root>
  <div className= "hero-wrapper" ref={container}>
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
              <h2>[ 06 ]</h2>
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
