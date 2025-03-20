"use client";
import LocalTime from "./localtime";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";


const Nav = () => {
    const router = useTransitionRouter();
    const pathname = usePathname(); // Get current route

    function slideInOut() {
        document.documentElement.animate(
            [
                { opacity: 1, transform: "translateY(0)" },
                { opacity: 0.2, transform: "translateY(-35%)" },
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-old(root)",
            }
        );

        document.documentElement.animate(
            [
                { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
                { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
            ],
            {
                duration: 1800,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)",
            }
        );
    }

    const getNavLink = (href, label) => (
        <div className="link">
            <a 
                onClick={(e) => {
                    e.preventDefault();
                    router.push(href, { onTransitionReady: slideInOut });
                }}
                href={href}
            >
                {pathname === href ? `[ ${label} ]` : label}
            </a>
        </div>
    );

    return (
        <nav className="nav">
            <div className="nav-logo">
                <a 
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/", { onTransitionReady: slideInOut });
                    }}
                    href="/"
                >
                    [ Devansh Ohri ]
                </a>
            </div>
            <div className="nav-links">
                {getNavLink("/", "Work")}
                {getNavLink("/about", "About")}
                {getNavLink("/gallery", "Gallery")}
            </div>
            <div className="nav-local">
                <a>[ Helsinki, FI &nbsp; <LocalTime /> ]</a>
            </div>
        </nav>
    );
};

export default Nav;
