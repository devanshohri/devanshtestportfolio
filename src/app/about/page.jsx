import PixelatedImage from "../components/PixelatedImage/page";

const About = () => {
    return(
        <div className="about">
            <div className="col">
            <PixelatedImage src={"/dev.jpg"} blurrySrc={"/devps.png"} />
            </div>
            <div className="col">
                <p>I am Devansh— a designer obsessed with clarity, function, and finesse.
                    I craft intentional experiences, balancing structure with creativity.
                    No gimmicks, just thoughtful design that works.
                </p>
            </div>
       
        </div>

    );
}

export default About