"use client";

import React, {useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

import styles from "../style.project.css"
import ReactLenis from "@studio-freight/react-lenis";

const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});

const PienetKoneet = () => {

    const [isClient, setIsClient] = useState(false);
    const container = useRef(null);

    return(
    <ReactLenis root>
    <div className="project-container">
        <div className="project-header">
            <div className="project-head-1">
                <h2>[ Pienet Koneet ]</h2>
                <h2>[ Title Animation ]</h2>
            </div>
            <div className="project-head-2">
                <h2>[ Motion, Video, Visual Effects, Production ]</h2>
            </div>
        </div>
        <div className="project-hero-img">
            <div className="video-wrapper">
                <ReactPlayer 
                url="https://vimeo.com/900496600"
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
                    <h1>Stop-motion Title sequence for YLE's new series for the younger audience</h1>
                </div>

                <div className="project-main-meta">
                    <p>
                    For Yle’s new children’s show, Pienet Koneet, I had the opportunity to create the
                    title video, staying true to the playful and hands-on spirit of the show.
                    Using a mix of stop-motion techniques, We crafted an engaging sequence that
                    captures the charm of miniature machines in motion.
                    <br /><br />
                    The animation was recorded frame by frame in Dragonframe, ensuring precise
                    movements and a tactile feel. The final sequence was then polished in After Effects,
                    enhancing the visuals while preserving the handcrafted aesthetic.
                    </p>
                </div>

                <div className="project-main-meta-wrapper">
                    <div className="project-main-meta">
                        <h2>[ Software ]</h2>
                        <ul>
                            <li><p>Dragonframe</p></li>
                            <li><p>After Effects</p></li>
                            <li><p>Photoshop</p></li>
                        </ul>
                    </div>
                    <div className="project-main-meta">
                        <h2>[ Team ]</h2>
                        <ul>
                            <li><p>Devansh Ohri</p></li>
                            <li><p>Gabriella Presnal</p></li>
                            <li><p>Juho Tuomisto</p></li>
                        </ul>
                    </div>
                    <div className="project-main-meta">
                        <h2>[ Supervisor ]</h2>
                        <p>Tuomo Joronen</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </ReactLenis>
    );
};

export default PienetKoneet