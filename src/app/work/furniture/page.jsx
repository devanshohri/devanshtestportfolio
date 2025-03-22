"use client";

import styles from "../style.project.css"
import ReactLenis from "@studio-freight/react-lenis";

const Furniture = () => {
    
    return (
        <ReactLenis root>
    <div className="project-container">
        <div className="project-header">
            <div className="project-head-1">
                <h2>[ Furniture App ]</h2>
                <h2>[ Building trust and Engaging customer ]</h2>
            </div>
            <div className="project-head-2">
                <h2>[ UX, Mobile UI, Visual ]</h2>
            </div>
        </div>
        <div className="project-hero-img">
            <img src="../media/furniture/furn1.webp" alt="" />
        </div>
        <div className="project-main">
            <div className="project-main-info">
                <div className="project-main-title">
                    <h1>Seamless User Flow for Selling Furniture: Enhancing Trust and Customer Engagement</h1>
                </div>
                <div className="project-main-meta">
                    <p>
                    In the evolving world of sustainable commerce, furniture brands are embracing resale 
                    platforms to extend the life cycle of their products. For this UX challenge, I was tasked 
                    with designing a seamless user flow for customers looking to sell second-hand furniture 
                    from the same brand.
                    <br /><br />
                    The core challenge was building a trustworthy and engaging experience that
                    encouraged users to confidently list their furniture while ensuring customer
                    retention for the brand.
                    </p>
                </div>

                <div className="project-main-meta-wrapper">
                    <div className="project-main-meta">
                        <h2>[ Software ]</h2>
                        <ul>
                            <li><p>Figma</p></li>
                        </ul>
                    </div>
                    <div className="project-main-meta">
                        <h2>[ Prototype ]</h2>
                        <ul>
                            <li><a target="_blank" href="https://www.figma.com/proto/hpJnF3Bg9z07pYKZy2aPhC/Reaktor-UX-Task?page-id=20%3A542&node-id=20%3A543&viewport=701%2C454%2C0.22&scaling=scale-down&starting-point-node-id=20%3A543">
                            <p>Link</p></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <h2>[ UX Challenges ]</h2>
                <ul>
                    <li><h1>01 Customer Retention and Engagement</h1></li>
                    <li><h1>02 Bridging Trust Concerns</h1></li>
                </ul>
            </div>
            <div className="project-case-mix">
                <div className="project-case-mix-text">
                <h2>[ Persona ]</h2>
                    <ul>
                        <li><p>- Is familiar with using web-apps.</p></li><br />
                        <li><p>- Fatima has logged in and already been registered as a seller.</p></li><br />
                        <li><p>- Has given necessary information to receive payments.</p></li><br />
                    </ul>
                    <br />
                    <h2>[ Use Case ]</h2>
                    <ul>
                        <li><p>- Fatima is selling a set of four XYZ bar stools.</p></li><br />
                        <li><p>- The stools are in average condition with some visible dents</p></li><br />
                        <li><p>- She would prefer someone to pick them up from her place in 2 weeks.</p></li><br />
                        <li><p>- Fatima wants at least 600 € for the whole set. XYZ takes 10 % of the price as commission.</p></li><br />
                    </ul>
                </div>
                <div className="project-case-mix-img" >
                    <img src="../media/furniture/furnpersona.webp" alt="" style={{ maxHeight: '40vh' }}/>
                </div>
            </div>
            <div className="project-case-img">
                <img src="../media/furniture/furnframe1.webp" alt="" />
            </div>
            <div className="project-case-mix">
                <div className="project-case-mix-text">
                    <h2>[ Product Identification ]</h2>
                        <ul>
                            <li>
                                <p>- This helps the user narrow down and find the exact product they are trying to sell.</p>
                            </li><br />
                            <li>
                                <p>- Seller can also use the product code or scan a barcode to easily find the exact product.</p>
                            </li>
                            <li><br />
                                <p>- This also works as a safety net- to ensure the seller is selling a product from the company’s catalogue.</p>
                            </li><br />
                        </ul>
                </div>
            
                <div className="project-case-mix-img">
                    <img src="../media/furniture/furnframe2.webp" alt="" />
                </div>
            </div>
            <div className="project-case-mix">
                <div className="project-case-mix-text">
                        <h2>[ Product Details ]</h2>
                            <ul>
                                <li>
                                    <p>- Add images of the product.</p>
                                </li><br />
                                <li>
                                    <p>- Narrow down the product to sell from the catalog or using the product code.</p>
                                </li><br />
                                <li>
                                    <p>- Describe the product & other details for eg: Condition, Age, delivery preference.</p>
                                </li><br />
                                <li>
                                    <p>- Specify the amount of items.</p>
                                </li><br />
                                <li>
                                    <p>- "Sell as Package"- Allows a seller to group multiple items and sell them together.</p>
                                </li><br />
                            </ul>
                    </div>
                    <div className="project-case-mix-img">
                        <img src="../media/furniture/furnframe3.webp" alt="" />
                    </div>
            </div>
            <div className="project-case-mix">
                <div className="project-case-mix-text">
                <h2>[ Seller and Payment Details ]</h2>
                            <ul>
                                <li>
                                    <p>- Fatima is already a registered seller,
                                    her information is already saved. This is to ensure that registered sellers have a seamless exprerience</p>
                                </li><br />
                                <li>
                                    <p>- It is still a part of the user flow, if the user needs to edit any information.</p>
                                </li><br />
                                <li>
                                    <p>- Payment Info page includes a detailed price division, which updates in real-time.</p>
                                </li><br />
                                <li>
                                    <p>- It helps the user calculate the price of the product, including XYZ’s commission and what they’ll receive when the product is sold.</p>
                                </li><br />
                            </ul>
                </div>
                <div className="project-case-mix-img">
                    <img src="../media/furniture/furnframe4.webp" alt="" />
                </div>
            </div>
            <div className="project-case-mix">
                <div className="project-case-mix-text">
                        <h2>[ Review and Listing ]</h2>
                            <ul>
                                <li>
                                    <p>- After clicking “Sell” the listing goes under review by the XYZ personnel, before it goes live.</p>
                                </li><br />
                                <li>
                                    <p>- The Listing has all the necessary details about the product from both the seller and XYZ.</p>
                                </li><br />
                                <li>
                                    <p>- It also includes Seller Information:</p>
                                    <ul>
                                        <li><p>Reviews</p></li>
                                        <li><p>Star Ratings</p></li>
                                        <li><p>Certified Seller</p></li>
                                    </ul>
                                </li><br />
                                <li>
                                    <p>These verification checks helps the company deal with users “Trust Issues”.</p>
                                </li><br />
                                <li>
                                    <p>Users feel safe while making purchases, knowing that the company has taken necessary steps to ensure, a product’s quality and buyer’s protection.</p>
                                </li><br />
                            </ul>
                    </div>
                    <div className="project-case-mix-img">
                        <img src="../media/furniture/furnframe5.webp" alt="" />
                    </div>
            </div>
            <div className="text-block">
                <h1>That's all folks :)</h1>
            </div>
        </div>
    </div>
    </ReactLenis>
    );
}

export default Furniture