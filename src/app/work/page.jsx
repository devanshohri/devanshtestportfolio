"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";


import React, {useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

import ReactLenis from "@studio-freight/react-lenis";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});

const Work = () => {
    const [isClient, setIsClient] = useState(false);

    const container = useRef(null);

    useGSAP(() => {
        // WORK ITEMS - Staggered Fade-in on Load
        gsap.from(".work", {
          y: 50,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        });
    
        /// WORK SECTION ANIMATION (Smooth & No Opacity Flickering)
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

        // WORK VIDEO REVEAL EFFECT
        gsap.utils.toArray(".work-image").forEach((workImage) => {
            gsap.from(workImage, {
            opacity: 0,
            scale: 1.1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: workImage,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
            });
        });
    
        // TEXT BLOCK - Smooth Fade Up
        gsap.from(".text-block h1", {
          opacity: 0,
          y: 40,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".text-block",
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        });
    
      }, [container]);

    const router = useTransitionRouter();
    const pathname = usePathname(); // Get current route

    function slideInOut() {
        document.documentElement.animate(
            [
                { opacity: 1, transform: "translateY(0)" },
                { opacity: 0.2, transform: "translateY(-35%)" },
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-old(root)",
            }
        );

        document.documentElement.animate(
            [
                { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
                { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
            ],
            {
                duration: 1800,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)",
            }
        );
    }


    return (

        <ReactLenis root>
          <div className="work-wrapper" ref={container}>
            <div className="work-container">
              <div className="work">
              <a 
              onClick={(e) => {
                e.preventDefault();
                router.push("/work/hexabot", { onTransitionReady: slideInOut });
            }}
              href="/work/hexabot" className="work-link">
                <div className="work-info">
                  <div className="work-title">
                    <h2>[ 01 ]</h2>
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
                    <p>View Project →</p>
                  </button>
                </div>
                <div className="work-image">
                  <img src="/media/hexabot/hexabot1.webp" alt="" />
                </div>
                </a>
              </div>

              <div className="work">
              <a 
              onClick={(e) => {
                e.preventDefault();
                router.push("/work/furniture", { onTransitionReady: slideInOut });
            }}
              href="/work/furniture" className="work-link">
                <div className="work-info">
                  <div className="work-title">
                    <h2>[ 02 ]</h2>
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
                    <p>View Project →</p>
                  </button>
                </div>
                <div className="work-image">
                  <img src="/media/furniture/furn1.webp" alt="" />
                </div>
                </a>
              </div>

              <div className="work">
              <a 
              onClick={(e) => {
                e.preventDefault();
                router.push("/work/pienetkoneet", { onTransitionReady: slideInOut });
            }}
              href="/work/pienetkoneet" className="work-link">
                  <div className="work-info">
                      <div className="work-title">
                          <h2>[ 03 ]</h2>
                          <h1>Yle Pienet Koneet - Title Animation</h1>
                      </div>
                      <div className="work-desc">
                          <ul>
                              <li><p>Motion Design</p></li>
                              <li><p>Visual Direction</p></li>
                              <li><p>Branding</p></li>
                          </ul>
                      </div>
                      <button className="work-view-btn">
                          <p>View Project →</p>
                      </button>
                  </div>
                  <div className="work-image">
                      <ReactPlayer 
                          url={`https://vimeo.com/900496600`}
                          controls={false}
                          autoPlay={false}
                          loop={true}
                          playing
                          playsinline
                          muted
                          width="100%"
                          height="100%"
                          
                      />
                  </div>
                  </a>
              </div>

              <div className="work">
              <a 
              onClick={(e) => {
                e.preventDefault();
                router.push("/work/blumaan", { onTransitionReady: slideInOut });
            }}
              href="/work/blumaan" className="work-link">
                <div className="work-info">
                  <div className="work-title">
                    <h2>[ 04 ]</h2>
                    <h1>Blumaan- Promo Video</h1>
                  </div>
                  <div className="work-desc">
                  <ul>
                    <li><p>Motion Design</p></li>
                    <li><p>Visual Direction</p></li>
                    <li><p>Branding</p></li>
                  </ul>
                  </div>
                  <button className="work-view-btn">
                    <p>View Project →</p>
                  </button>
                </div>
                <div className="work-image">
                  <ReactPlayer 
                              url={`https://vimeo.com/572826410`}
                              controls={false}
                              autoPlay={false}
                              loop={true}
                              playing
                              playsinline
                              muted
                              width="100%"
                              height="100%"
                              
                          />
                </div>
                </a>
              </div>

              <div className="work">
              <a 
              onClick={(e) => {
                e.preventDefault();
                router.push("/work/illvzn", { onTransitionReady: slideInOut });
            }}
              href="/work/illvzn" className="work-link">
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
                    <p>View Project →</p>
                  </button>
                </div>
                <div className="work-image">
                <ReactPlayer 
                              url={`https://vimeo.com/572812522`}
                              controls={false}
                              autoPlay={false}
                              loop={true}
                              playing
                              playsinline
                              muted
                              width="100%"
                              height="100%"
                              
                          />
                </div>
                </a>
              </div>

              <div className="work">
          <a 
            onClick={(e) => {
              e.preventDefault();
              router.push("/work/darts", { onTransitionReady: slideInOut });
          }}
            href="/work/flyers" className="work-link">
            <div className="work-info">
              <div className="work-title">
                <h2>[ 06 ]</h2>
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
                <p>View Project →</p>
              </button>
            </div>
            <div className="work-image">
              <ReactPlayer 
                        url={`https://vimeo.com/1066997937`}
                        controls={false}
                        autoPlay={false}
                        loop={true}
                        playing
                        playsinline
                        muted
                        width="100%"
                        height="100%"
                        
                    />
            </div>
            </a>
        </div>

            </div>
          </div>

          <div className="text-block">
            <h1>
              No Gimmicks,
            </h1>
            <h1>
            Just thoughtful design
            </h1>
            <h1>
            "That works :)
            </h1>
          </div>
  </ReactLenis>
    );
};

export default Work;
