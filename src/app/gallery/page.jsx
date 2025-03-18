"use client";

import React, {useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

import ReactLenis from "@studio-freight/react-lenis";


import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});

const Gallery = () => {

    const [isClient, setIsClient] = useState(false);
    
    const container = useRef(null);

    const [selectedMedia, setSelectedMedia] = useState(null);

    const openLightbox = (item) => {
        setSelectedMedia(item);
    };

    const closeLightbox = () => {
        setSelectedMedia(null);
    };

    const galleryItems = [
        { type: "image", src: "/media/tff.webp", aspectRatio: "portrait" },
        { type: "image", src: "/media/porsche.webp", aspectRatio: "wide" },
        { type: "image", src: "/media/ekencards.webp", aspectRatio: "square" },
        { type: "image", src: "/media/turt.webp", aspectRatio: "square" },
        { type: "video", src: "https://vimeo.com/1067135693", aspectRatio: "portait" },
        { type: "image", src: "/media/poster01.webp", aspectRatio: "portrait" },
        { type: "video", src: "https://vimeo.com/1067120101", aspectRatio: "square" },
        { type: "image", src: "/media/rr.webp", aspectRatio: "square" },
        { type: "image", src: "/media/mcl.webp", aspectRatio: "square" },
    ];

    useGSAP(() => {
        // Staggered fade-in on load
        gsap.from(".gallery-item", {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          stagger: 0.15,
          delay: 1.2,
          ease: "power3.out",
        });
    
    
      }, [container]);

    return (
        <ReactLenis root>
            <div className="gallery-container" ref={container}>
                <div className="gallery">
                    {galleryItems.map((item, index) => (
                        <div key={index} className={`gallery-item ${item.aspectRatio}`} onClick={() => openLightbox(item)}>
                            {item.type === "image" ? (
                                <img src={item.src} alt={`Gallery item ${index}`} />
                            ) : (
                                <ReactPlayer 
                                url={item.src}
                                controls={false}
                                autoPlay={false}
                                loop={true}
                                playing
                                muted
                                width="100%"
                                height="100%"
                                
                            />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Overlay */}
{selectedMedia && (
    <div className="lightbox-overlay" onClick={closeLightbox}>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === "image" ? (
                <img src={selectedMedia.src} alt="Expanded view" />
            ) : (
                <ReactPlayer 
                    url={selectedMedia.src}
                    controls
                    playing
                    width="100%"
                    height="auto"
                />
            )}
        </div>
    </div>
)}


        </ReactLenis>
    );
};

export default Gallery;
