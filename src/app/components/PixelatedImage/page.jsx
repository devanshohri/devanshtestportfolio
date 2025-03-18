"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";

const PixelatedImage = ({
  src,
  blurrySrc,
  initialPixelation = 64,
  threshold = 5,
  timeout = 100,
  minResolution = 1600,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 0, height: 0 });
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const inView = useInView(canvasRef, { once: true, amount: 0.5 });

  const pathname = usePathname(); // ✅ This replaces useRouter()

  const adjustCanvasSize = (image) => {
    if (canvasRef.current) {
      const containerWidth = canvasRef.current.offsetWidth;
      const containerHeight = canvasRef.current.offsetHeight;

      const imgAspectRatio = image.naturalWidth / image.naturalHeight;
      const containerAspectRatio = containerWidth / containerHeight;

      let width, height;
      if (imgAspectRatio > containerAspectRatio) {
        height = Math.max(containerHeight, minResolution);
        width = height * imgAspectRatio;
      } else {
        width = Math.max(containerWidth, minResolution);
        height = width / imgAspectRatio;
      }

      setCanvasDimensions({ height, width });
    }
  };

  const drawImage = (image, pixelationFactor) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    const { width, height } = canvasDimensions;

    context.clearRect(0, 0, width, height);

    if (pixelationFactor < threshold) {
      context.drawImage(image, 0, 0, width, height);
      return;
    }

    context.drawImage(image, 0, 0, width, height);
    const imageData = context.getImageData(0, 0, width, height).data;

    for (let y = 0; y < height; y += pixelationFactor) {
      for (let x = 0; x < width; x += pixelationFactor) {
        const pixelIndex = (x + y * width) * 4;

        context.fillStyle = `rgba(${imageData[pixelIndex]}, ${
          imageData[pixelIndex + 1]
        }, ${imageData[pixelIndex + 2]}, ${imageData[pixelIndex + 3] / 255})`;

        context.fillRect(x, y, pixelationFactor, pixelationFactor);
      }
    }
  };

  const animatePixelation = (image, currentPixelation) => {
    drawImage(image, currentPixelation);

    if (currentPixelation < threshold) {
      setAnimationComplete(true);
      return;
    }

    setTimeout(() => {
      animatePixelation(image, currentPixelation / 2);
    }, timeout);
  };

  useEffect(() => {

    const image = new Image();
    image.src = src;
    image.crossOrigin = "Anonymous";

    image.onload = () => {
      imgRef.current = image;
      setImageLoaded(true);
      adjustCanvasSize(image);
    };
  }, [src]);

  useEffect(() => {
    if (inView && imgRef.current && imageLoaded && !animationComplete) {
      setTimeout(() => {
        animatePixelation(imgRef.current, initialPixelation);
      }, 1000); // Delay in milliseconds (2000ms = 2 seconds)
    }
  }, [inView, imageLoaded, initialPixelation]);
  

  // ✅ Re-trigger animation when pathname changes
  useEffect(() => {
    setAnimationComplete(false);
    setImageLoaded(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (imgRef.current && imageLoaded) {
        adjustCanvasSize(imgRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imageLoaded]);

  return (
    <div className={styles.image_container}>
      <img
        src={blurrySrc}
        alt="Super Blurry and Pixelated Image Used For Fast Loading"
      />
      <canvas
        ref={canvasRef}
        width={canvasDimensions.width}
        height={canvasDimensions.height}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default PixelatedImage;
