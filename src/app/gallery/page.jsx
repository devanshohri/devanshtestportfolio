"use client";
import ReactLenis from "@studio-freight/react-lenis";

const Gallery = () => {
    const galleryItems = [
        { type: "image", src: "/media/dev.jpg", aspectRatio: "portrait" },
        { type: "image", src: "/media/Illvzn.png", aspectRatio: "wide" },
        { type: "image", src: "/media/Flyers1.png", aspectRatio: "square" },
        { type: "image", src: "/media/PienetKoneet.jpeg", aspectRatio: "wide" },
        { type: "image", src: "/media/Screen.png", aspectRatio: "portrait" },
    ];

    return (
        <ReactLenis root>
        <div className="gallery">
            <div className="gallery-container">
                {galleryItems.map((item, index) => (
                    <div key={index} className={`gallery-item ${item.aspectRatio}`}>
                        {item.type === "image" ? (
                            <img src={item.src} alt={`Gallery item ${index}`} />
                        ) : (
                            <video autoPlay loop muted playsInline>
                                <source src={item.src} type="video/mp4" />
                            </video>
                        )}
                    </div>
                ))}
            </div>
        </div>
        </ReactLenis>
    );
};

export default Gallery;
