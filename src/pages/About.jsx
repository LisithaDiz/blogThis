import React from 'react';
import team1 from '../assets/team_1.jpg';
import team2 from '../assets/team_2.jpg';
import team3 from '../assets/team_3.jpg';
import team4 from '../assets/team_4.jpg';
import "./styles.css";

const AboutUs = () => {
    return (
        <div className="about-us">
            <section className="section history">
                <div className="content">
                    <h2>Our History</h2>
                    <p>Founded in 2024, Neural Shifter embarked on a revolutionary journey to bridge the gap between human consciousness and robotic intelligence. Our visionary founders, driven by a passion for cutting-edge technology and a deep understanding of the human brain, set out to create a groundbreaking solution that would redefine the future of human existence.</p>
                    <p>In the early days, our dedicated team of neuroscientists, engineers, and AI experts collaborated to develop the foundational technologies necessary for transferring human consciousness to robotic entities. Through relentless research, experimentation, and innovation, we achieved significant milestones, pushing the boundaries of what was thought possible.</p>
                    <p>Our breakthrough came in 2026 when we successfully demonstrated the first seamless transfer of human consciousness to a robotic platform. This monumental achievement marked the beginning of a new era, where the limitations of the human body could be transcended, and individuals could experience life in ways never before imagined.</p>
                    <p>As we continue to evolve, Neural Shifter remains committed to advancing our technology and expanding its applications. Our mission is to enhance human potential, offering new dimensions of freedom, longevity, and possibilities through the seamless integration of human consciousness with advanced robotic systems.</p>
                    <p>Join us on this extraordinary journey as we redefine the future of humanity, one mind at a time.</p>
                </div>
            </section>

            <section className="section mission">
                <div className="content">
                    <h2>Our Mission</h2>
                    <p>At Neural Shifter, our mission is to revolutionize the human experience by seamlessly integrating human consciousness with advanced robotic systems. We strive to:</p>
                    <p><strong>1. Enhance Human Potential:</strong> Empower individuals to transcend the physical limitations of the human body, unlocking new dimensions of freedom, longevity, and possibilities.</p>
                    <p><strong>2. Innovate Fearlessly:</strong> Continuously push the boundaries of technology through cutting-edge research, development, and innovation in neuroscience, artificial intelligence, and robotics.</p>
                    <p><strong>3. Promote Ethical Integration:</strong> Ensure the ethical and responsible application of our technologies, prioritizing the well-being, privacy, and security of individuals and society.</p>
                    <p><strong>4. Foster Collaboration:</strong> Collaborate with leading experts, institutions, and organizations worldwide to drive advancements and share knowledge in the fields of neuroscience and robotics.</p>
                    <p><strong>5. Transform Lives:</strong> Create impactful solutions that enhance the quality of life, offering new opportunities for individuals to experience life in extraordinary ways.</p>
                    <p>Our mission is to lead the way in shaping a future where human consciousness and robotic intelligence coexist harmoniously, transforming the possibilities of human existence.</p>
                </div>
            </section>

            <section className="section team">
                <div className="content">
                    <h2>Our Team</h2>
                    <div className="team-member">
                        <img src={team1} alt="Team Member 1" />
                        <div className="member-info">
                            <h3>Bobby Befaris</h3>
                            <p>Position: CEO</p>
                            <p>Neuroscientist and AI engineer - Mars</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={team2} alt="Team Member 2" />
                        <div className="member-info">
                            <h3>XAM562</h3>
                            <p>Position: CTO</p>
                            <p>150 year old Human Immotral Brain Shifting Rngineer - Mars</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={team3} alt="Team Member 3" />
                        <div className="member-info">
                            <h3>Mike Johnson</h3>
                            <p>Position: CFO</p>
                            <p>Electrical Engineer - USA</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={team4} alt="Team Member 4" />
                        <div className="member-info">
                            <h3>Emily Davis</h3>
                            <p>Position: COO</p>
                            <p>Psychologist - India</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section_values">
                <div className="content">
                    <h2>Our Other Research Areas</h2>
                    <ul>
                    <li><strong>Extending human lifespan by considering the DNA</strong></li>
                    <li><strong>Venus terraformation</strong> </li>
                    <li><strong>Biological researchers for build Space Colonies</strong></li>
                    </ul>
                </div>
            </section>
            <section className="section_values">
            <div className="content">
                    <h2>Past Immotral Researches</h2>
                    <ul>
                        <li><a href="https://sinclair.hms.harvard.edu/research">David Sinclair - Harvard University</a></li>
                        <li><a href="https://neuralink.com/">NeuraLink</a></li>
                        <li><a href="https://www.calicolabs.com/">CalicoLabs</a></li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
