"use client";

import styles from "../style.project.css"
import ReactLenis from "@studio-freight/react-lenis";

const Hexabot = () => {
    return(
    <ReactLenis root>
    <div className="project-container">
        <div className="project-header">
            <div className="project-head-1">
                <h2>[ Hexabot ]</h2>
                <h2>[ Managing multi-purpose robots ]</h2>
            </div>
            <div className="project-head-2">
                <h2>[ UX, Mobile UI, Visual, Brand ]</h2>
            </div>
        </div>
        <div className="project-hero-img">
            <img src="../media/hexabot/hexabot3.webp" alt="" />
        </div>
        <div className="project-main">
            <div className="project-main-info">
                <div className="project-main-title">
                    <h1>Helping lunar pioneers manage Hexabots in an effortless and effcient manner.</h1>
                </div>

                <div className="project-main-desc">
                    <p>For Designflows 2025, I was tasked with designing a futuristic yet highly
                        functional mobile app to help lunar pioneers effortlessly manage their Hexabots.
                        The goal was to create an intuitive interface for assigning tasks, tracking progress,
                        and receiving real-time updates, ensuring seamless interaction despite the colony’s
                        challenging conditions.
                    </p>
                </div>

                <div className="project-main-meta-wrapper">
                    <div className="project-main-meta">
                        <h2>[ Software ]</h2>
                        <ul>
                            <li><p>Figma</p></li>
                            <li><p>Photoshop</p></li>
                        </ul>
                    </div>

                    <div className="project-main-meta">
                        <h2>[ Event ]</h2>
                        <p>Designflows 2025</p>
                    </div>
                </div>
            </div>
            <div className="project-ux-chal">
                <h2>[ UX Challenges ]</h2>
                <ul>
                    <li><h1><span style={{ color: '#F54703' }}>7-10</span> times daily, Users check updates</h1></li><br />
                    <li><h1><span style={{ color: '#F54703' }}>65%</span> of tasks are urgent, requiring a fast, stress-free assignment process.</h1></li><br />
                    <li><h1><span style={{ color: '#F54703' }}>Complex Environments: </span>UI must be usable with gloves, fogged helmets, or limited dexterity.</h1></li><br />
                </ul>
            </div>
            <div className="project-case-mix">
                <div className="project-case-mix-text">
                <h2>[ Persona ]</h2><br />
                    <ul>
                        <h1 style={{ color: '#F54703',}}>Explorers and researchers:</h1>
                        <li><p>- Focus on different mission-critical tasks.</p></li><br />
                        <li><p>- Are often multitasking.</p></li><br />
                        <li><p>- Need to conduct their experiments efficiently. </p></li><br />
                    </ul>
                    <br />
                    <ul>
                        <h1 style={{ color: '#F54703', }}>Families:</h1>
                        <li><p>- These users aren’t technical experts.</p></li><br />
                        <li><p>- Rely on Hexabots for everyday activities.</p></li><br />
                        <li><p>- Require their interactions with the app to be as simple and straightforward as possible.</p></li><br />
                    </ul>
                    <br />
                    <h2>[ Use Case ]</h2>
                    <ul>
                        <li><p>- Check the dashboard for real-time bot status.</p></li><br />
                        <li><p>- Assign a HexaBot to gather the required resources.</p></li><br />
                        <li><p>- Monitor its progress, receiving instant updates upon task completion.</p></li><br />
                    </ul>
                </div>
                <div className="project-case-mix-img" >
                    <img src="../media/hexabot/hexabot2.webp" alt="" style={{ maxHeight: '40vh', width:'100%'}}/>
                </div>
            </div>
            <div className="project-case-mix">
                <div className="project-case-mix-text">
                    <h2>[ Real-time updates ]</h2>
                        <ul>
                            <li>
                                <p>- Dashboard with task related statistics on the Lock Screen.</p>
                            </li><br />
                            <li>
                                <p>- Real-time HexaBot status and task tracking at a glance.</p>
                            </li><br />
                            <li>
                                <p>- This eliminates the posibility for users to miss out on crucial task related information, while in difficult conditions.</p>
                            </li><br />
                        </ul>
                </div>
            
                <div className="project-case-mix-img">
                    <img src="../media/hexabot/hexabot4.webp" alt="" />
                </div>
            </div>
            <div className="project-case-mix">
                <div className="project-case-mix-text">
                    <h2>[ Home Screen ]</h2>
                        <ul>
                            <li>
                                <p>- Home screen with both a List and Map view of the Hexabots, to track them easily.</p>
                            </li><br />
                            <li>
                                <p>- Toggle between online and offline Hexabots to manage them efficiently.</p>
                            </li><br />
                            <li>
                                <p>- Critical Alerts – Ensures users never miss crucial task updates, even in challenging environments.</p>
                            </li><br />
                        </ul>
                </div>
            
                <div className="project-case-mix-img">
                    <img src="../media/hexabot/hexabot5.webp" alt="" />
                </div>
            </div>

            <div className="project-case-mix">
                <div className="project-case-mix-text">
                    <h2>[ Quick Assign Tasks ]</h2>
                        <ul>
                            <li>
                                <p>- Ability to assign tasks quickly using both a Quick assign button and Speak button.</p>
                            </li><br />
                            <li>
                                <p>- Quick assign button allows the user to input the most vital information needed to start the task and lets them assign a task swiftly.</p>
                            </li><br />
                            <li>
                                <p>- Speak button for Hands-free operations for efficiency and accessibility.</p>
                            </li><br />
                        </ul>
                </div>
            
                <div className="project-case-mix-img">
                    <img src="../media/hexabot/hexabot6.webp" alt="" />
                </div>
            </div>
            <div className="project-case-mix">
                <div className="project-case-mix-text">
                    <h2>[ Hexabot profile ]</h2>
                        <ul>
                            <li>
                                <p>- Let's users personalize HexaBots for easy identification and better engagement.</p>
                            </li><br />
                            <li>
                                <p>- Status Overview – Displays uptime, total operation time, completed tasks, and total distance traveled.</p>
                            </li><br />
                            <li>
                                <p>- Task Updates – Shows the current task, location, and progress percentage in real time.</p>
                            </li><br />
                            <li>
                                <p>- Gives users extended task allocation options, for eg:- Queing Tasks.</p>
                            </li><br />
                        </ul>
                </div>
            
                <div className="project-case-mix-img">
                    <img src="../media/hexabot/hexabot7.webp" alt="" />
                </div>
            </div>
            <div className="project-case-mix">
                <div className="project-case-mix-text">
                    <h2>[ Task Dashboard ]</h2>
                        <ul>
                            <li>
                                <p>- Task Dashboard provides real-time, detailed task information, including:</p>
                            </li><br />
                            <li>
                                <p>- Assigned Team & Location– Which bots are assigned and where the task is happening.</p>
                            </li><br />
                            <li>
                                <p>- Task Progress – A clear visual indicator of completion percentage.</p>
                            </li><br />
                            <li>
                                <p>- Resources Collected – Live updates on collected materials (e.g., silicon, iron).</p>
                            </li><br />
                            <li>
                                <p>- Environmental Conditions – Displays terrain type, temperature, and radiation levels.</p>
                            </li><br />
                            <li>
                                <p>- Estimated Time of Arrival (ETA) – Helps plan based on expected completion time.</p>
                            </li><br />
                            <li>
                                <p>- Hexabot Alerts – Immediate updates on task changes or critical warnings.</p>
                            </li><br />
                        </ul>
                </div>
            
                <div className="project-case-mix-img">
                    <img src="../media/hexabot/hexabot8.webp" alt="" />
                </div>
            </div>
            <div className="text-block">
                <h1>That's all folks :)</h1>
            </div>
        </div>
    </div>
    </ReactLenis>
    );
};

export default Hexabot