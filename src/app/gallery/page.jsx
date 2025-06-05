"use client";

import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import ReactLenis from "@studio-freight/react-lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const container = useRef(null);

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
    { type: "video", src: "https://vimeo.com/1067135693", aspectRatio: "portrait" },
    { type: "image", src: "/media/poster01.webp", aspectRatio: "portrait" },
    { type: "image", src: "/media/mcl.webp", aspectRatio: "square" },
    { type: "image", src: "/media/walkman.webp", aspectRatio: "portrait" },
    { type: "video", src: "https://vimeo.com/1067120101", aspectRatio: "square" },
    { type: "image", src: "/media/rr.webp", aspectRatio: "square" },
    { type: "image", src: "/media/turt.webp", aspectRatio: "portrait" },
  ];

  // Define estimated ratios
  const aspectRatios = {
    portrait: { width: 3, height: 4 },
    square: { width: 1, height: 1 },
    wide: { width: 16, height: 9 },
  };

  useGSAP(() => {
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
          {galleryItems.map((item, index) => {
            const ratio = aspectRatios[item.aspectRatio];

            return (
              <div
                key={index}
                className={`gallery-item ${item.aspectRatio}`}
                onClick={() => openLightbox(item)}
                style={{ position: "relative" }}
              >
                {item.type === "image" && ratio ? (
                  <Image
                    src={item.src}
                    alt={`Gallery item ${index}`}
                    width={ratio.width * 300}
                    height={ratio.height * 300}
                    className="object-cover w-full h-auto"
                  />
                ) : item.type === "video" ? (
                  <div className="gallery-video-wrapper">
                    <ReactPlayer
                      url={item.src}
                      controls={false}
                      autoPlay={false}
                      loop={true}
                      playing
                      playsinline
                      muted
                      width="100%"
                      height="100%"
                      style={{ pointerEvents: "none" }}
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedMedia && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content">
            {selectedMedia.type === "image" ? (
              <Image
                src={selectedMedia.src}
                alt="Expanded view"
                width={800}
                height={1000}
                className="object-contain"
              />
            ) : (
              <ReactPlayer
                url={selectedMedia.src}
                controls
                playing
                width="100%"
                height="100%"
              />
            )}
          </div>
        </div>
      )}
    </ReactLenis>
  );
};

export default Gallery;
