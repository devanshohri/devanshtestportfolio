"use client";

import React, {useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

import styles from "../style.project.css"
import ReactLenis from "@studio-freight/react-lenis";

const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});

const DartsBar = () => {

    const [isClient, setIsClient] = useState(false);
    const container = useRef(null);

    return(
    <ReactLenis root>
    <div className="project-container">
        <div className="project-header">
            <div className="project-head-1">
                <h2>[ Interactive Darts Bar ]</h2>
                <h2>[ Website Redesign ]</h2>
            </div>
            <div className="project-head-2">
                <h2>[ Web, UI/UX, Interaction, Brand ]</h2>
            </div>
        </div>
        <div className="project-hero-img">
            <div className="video-wrapper">
                <ReactPlayer 
                url="https://vimeo.com/1066997937"
                controls={false}
                loop={true}
                playing
                playsinline
                muted
                width="100%"
                height="100%"
                />
            </div>
        </div>
        <div className="project-main">
            <div className="project-main-info">
                <div className="project-main-title">
                    <h1>Redesigned a website for a local new Interactive Darts Bar</h1>
                </div>

                <div className="project-main-desc">
                    <p>When a new darts bar opened in the city, they needed more than just a 
                        physical space—they needed a digital presence that captured the energy 
                        of the game and the atmosphere of the bar. I took on the challenge of 
                        redesigning their website, ensuring it was both visually engaging and 
                        functionally seamless. <br />
                        <br /> The goal was to create a bold, inviting, and easy-to-navigate website that
                        showcased the bar’s offerings, allowed users to book games, and reflected the
                        competitive yet social spirit of darts. The result? A sleek, modern site that
                        brings the precision of darts into an intuitive digital experience.
                    </p>
                </div>

                <div className="project-main-meta-wrapper">
                    <div className="project-main-meta">
                        <h2>[ Software ]</h2>
                        <ul>
                            <li><p>Figma</p></li>
                            <li><p>Webflow</p></li>
                        </ul>
                    </div>
                    <div className="project-main-meta">
                        <h2>[ View Live ]</h2>
                        <p><a href="https://flyers-7649c5.webflow.io/" target="_blank">Link</a></p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </ReactLenis>
    );
};

export default DartsBar