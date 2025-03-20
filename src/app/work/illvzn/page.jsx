"use client";

import React, {useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

import styles from "../style.project.css"
import ReactLenis from "@studio-freight/react-lenis";

const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});

const Illvzn = () => {

    const [isClient, setIsClient] = useState(false);
    const container = useRef(null);

    return(
    <ReactLenis root>
    <div className="project-container">
        <div className="project-header">
            <div className="project-head-1">
                <h2>[ Illvzn x Only The Blind ]</h2>
                <h2>[ Promo Video ]</h2>
            </div>
            <div className="project-head-2">
                <h2>[ Motion, Video, Brand, Marketing ]</h2>
            </div>
        </div>
        <div className="project-hero-img">
            <div className="video-wrapper">
                <ReactPlayer 
                url="https://vimeo.com/572812522"
                controls={true}
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
                    <h1>Promo Video for a collaboration between Illvzn and only the blind</h1>
                </div>

                <div className="project-main-desc">
                    <p>
                    I made a promo edit for the ILLVZN x Only The Blind apparel drop for an editing 
                    contest organized by YouTuber Konstantin. The objective was to make a high-energy, 
                    fashion-conscious edit that reflected the style, motion, and vibe of the collection.

                    The project pushed me to incorporate cinematic pacing, bold transitions, and 
                    dynamic visuals to make an interesting promotional video that appealed to the 
                    streetwear vibe.
                    </p>
                </div>

                <div className="project-main-meta-wrapper">
                    <div className="project-main-meta">
                        <h2>[ Software ]</h2>
                        <ul>
                            <li><p>After Effects</p></li>
                            <li><p>Premiere Pro</p></li>
                            <li><p>Photoshop</p></li>
                        </ul>
                    </div>
                    <div className="project-main-meta">
                        <h2>[ Footage ]</h2>
                        <ul>
                            <li><p>Ikon Films</p></li>
                        </ul>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    </ReactLenis>
    );
};

export default Illvzn