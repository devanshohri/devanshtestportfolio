"use client";
import { useTransitionRouter } from "next-view-transitions";


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
                duration: 1500,
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
            <div className="links">
                <div className="link">
                    <a 
                    
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/", {
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
                        router.push("/about", {
                            onTransitionReady: slideInOut,
                        });
                    }}

                    href="/about">
                        About</a>
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
            </div>
        </nav>
    );
}

export default Nav