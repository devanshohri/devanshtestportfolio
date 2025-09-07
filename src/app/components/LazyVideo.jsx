"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Load ReactPlayer dynamically (client-side only)
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

const LazyVideo = ({ url, thumbnail, alt }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  // Ensure client-only render to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // During SSR or first hydration pass: render the thumbnail only
    return (
      <div className="work-image" ref={ref}>
        <Image
          src={thumbnail}
          alt={alt}
          width={1500}
          height={1000}
          priority={false}
        />
      </div>
    );
  }

  return (
    <div className="work-image" ref={ref}>
      {inView ? (
        <ReactPlayer
          url={url}
          controls={false}
          autoPlay={false}
          loop
          playing
          playsinline
          muted
          width="100%"
          height="100%"
        />
      ) : (
        <Image
          src={thumbnail}
          alt={alt}
          width={1500}
          height={1000}
          priority={false}
        />
      )}
    </div>
  );
};

export default LazyVideo;
