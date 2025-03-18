"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import PixelatedImage from "../components/PixelatedImage/page";
import ContactLinks from "../components/contactlinks";
import ReactLenis from "@studio-freight/react-lenis";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);

  useGSAP(() => {
    // HERO TEXT & INFO HEADINGS (h2) ANIMATE TOGETHER ON LOAD
    gsap.from([".hero-text h2", ".hero-text p", ".info h2"], {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    // INFO-TEXT (Fades in when scrolled into view)
    gsap.utils.toArray(".info-text").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    });

  }, [container]);

  return (
    <ReactLenis root>
      <div className="about" ref={container}>
        <div className="hero-img">
          <PixelatedImage src={"/media/dev.jpg"} blurrySrc={"/media/devps.png"} />
          <div className="hero-text">
            <h2>[ About ]</h2>
            <p>
              I’m Devansh— a designer based in Helsinki. <br /><br />
              A creative obsessed with clarity, function, and finesse. I craft clear, functional, and refined experiences across Analog and Digital.
            </p>
          </div>
        </div>

        <div className="info-container">
          <div className="info">
            <h2>[ Skills ]</h2>
            <div className="info-text">
              <ul>
                <li><p>- Visual Design</p></li>
                <li><p>- Web Design</p></li>
                <li><p>- Product Design</p></li>
                <li><p>- 3D</p></li>
                <li><p>- Creative Development</p></li>
                <li><p>- Branding</p></li>
              </ul>
            </div>
          </div>

          <div className="info">
            <h2>[ Currently ]</h2>
            <div className="info-text">
              <p>Studying Media & Arts at Tampere University of Applied Sciences</p>
            </div>
          </div>

          <div className="info">
            <h2>[ Contact ]</h2>
            <ContactLinks />
          </div>

          <div className="info">
            <h2>[ Documents ]</h2>
            <div className="info-text">
              <a href="/Devansh_Ohri_CV.pdf" target="_blank">
                <p>CV</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default About;
