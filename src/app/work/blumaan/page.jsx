"use client";

import React, {useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

import styles from "../style.project.css"
import ReactLenis from "@studio-freight/react-lenis";

const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});

const Blumaan = () => {

    const [isClient, setIsClient] = useState(false);
    const container = useRef(null);

    return(
    <ReactLenis root>
    <div className="project-container">
        <div className="project-header">
            <div className="project-head-1">
                <h2>[ Blumaan ]</h2>
                <h2>[ Promo Video ]</h2>
            </div>
            <div className="project-head-2">
                <h2>[ Motion, Video, Brand, Marketing ]</h2>
            </div>
        </div>
        <div className="project-hero-img">
        <div className="video-scroll-overlay">
        </div>
            <div className="video-wrapper">
                <ReactPlayer 
                url="https://vimeo.com/572826410"
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
                    <h1>Promo Marketing Video for Blumaan's new product- Top 10 finalist</h1>
                </div>

                <div className="project-main-meta">
                    <p>
                    I created a promo edit for BluMaan hair products as part of an editing contest 
                    hosted by YouTuber Konstantin. The challenge was to craft a dynamic and engaging ad, 
                    balancing storytelling, pacing, and visuals to showcase the product effectively.
                    <br /><br />
                    In this edit, I experimented with crumpled and torn paper assets to create a 
                    stop-motion paper unfolding effect, adding an element of tactility and 
                    handcraftedness to the appearance.
                    <br /><br />
                    My edit was nominated in the Top 10 and judged by both Konstantin and 
                    Hayden Hillier-Smith. As a finalist, I also received a cash prize for my 
                    entry.
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

export default Blumaan