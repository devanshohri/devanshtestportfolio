"use client";
import { useTransitionRouter } from "next-view-transitions";
import LocalTime from "./localtime";


const Nav = () => {
    const router = useTransitionRouter();

    function slideInOut() {
        console.log("slideInOut triggered");
        document.documentElement.animate(
            [
                {
                    opacity: 1,
                    transform: "translateY(0)"
                },
                {
                    opacity: 0.2,
                    transform: "translateY(-35%)"
                },
            ],{
                duration: 1200,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-old(root)",
            }
        )

        document.documentElement.animate(
            [
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                }
            ],{
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)",
            }
        )
    }

    return(
        <nav className="nav">
            <div className="nav-logo">
                <div className="link">
                    <a 
                    
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/", {
                            onTransitionReady: slideInOut,
                        });
                    }}

                    href="/">
                        [ Devansh Ohri ]</a>
                </div>
            </div>
            <div className="nav-links">
                <div className="link">
                    <a 
                    
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/work", {
                            onTransitionReady: slideInOut,
                        });
                    }}

                    href="/">
                        Work</a>
                </div>
                
                <div className="link">
                <a 
                    
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/contact", {
                            onTransitionReady: slideInOut,
                        });
                    }}

                    href="/contact">
                        Contact</a>
                </div>
                <div className="link">
                <a 
                    
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/gallery", {
                            onTransitionReady: slideInOut,
                        });
                    }}

                    href="/gallery">
                        Gallery</a>
                </div>
            </div>
            <div className="nav-local">
                <a>[ Helsinki, FI &nbsp; <LocalTime /> ]</a>
            </div>
        </nav>
    );
}

export default Nav