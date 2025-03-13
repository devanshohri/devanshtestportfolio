const Footer = () => {
    return(
        <footer>
            <div className="footer-top">
                <div className="footer-text" style={{ justifySelf: "start", alignSelf: "center" }}><h1>Designed and Developed by yours truly</h1></div>
                <div className="footer-text" style={{ justifySelf: "center", alignSelf: "center" }}><h1>2025 © aLL RIGHTS RESERVED</h1></div>
                <div className="footer-text" style={{ justifySelf: "end", alignSelf: "center" }}><a href="#"><h1>Jump to top</h1></a></div>
            </div>
            <div className="footer-bottom">
                <div className="footer-logo">
                    <img src="/logo-footer.svg" alt=""/>
                </div>
            </div>
        </footer>
    )
}

export default Footer