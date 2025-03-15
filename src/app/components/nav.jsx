"use client";
import LocalTime from "./localtime";


const Nav = () => {

    return(
        <nav className="nav">
            <div className="nav-logo">
                <div className="link">
                    <a href="/"> [ Devansh Ohri ]</a>
                </div>
            </div>
            <div className="nav-links">
                <div className="link">
                    <a href="#work"> Work</a>
                </div>
                
                <div className="link">
                <a href="/contact"> Contact</a>
                </div>
                <div className="link">
                <a href="/gallery"> Gallery</a>
                </div>
            </div>
            <div className="nav-local">
                <a>[ Helsinki, FI &nbsp; <LocalTime /> ]</a>
            </div>
        </nav>
    );
}

export default Nav