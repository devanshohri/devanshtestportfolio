"use client";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Enables smooth scrolling
        });
    };

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-text">
                    <h2>2025 © ALL RIGHTS RESERVED</h2>
                </div>
                <div className="footer-text">
                    <button onClick={scrollToTop} className="jump-button">
                        <h2>Jump to top</h2>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
