import React from "react";
import HTMLFlipBook from "react-pageflip";
import "../Components/Style/style.css";

const Book = () => {
    const pages = [
        {
            title: "About Me",
            content:
                "Hello! I'm Gourav Thakur, a passionate B.Tech (CS/IT) student at IPS Academy, Indore (Class of 2026).\n\nMy focus lies in Full Stack Web Development and Data Analytics. I thrive on building secure, scalable, and user-centric applications using modern technologies.\n\nI'm particularly interested in creating solutions that make a real impact - whether it's streamlining business processes or deriving meaningful insights from data.\n\nWhen I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enhancing my skills through hands-on practice.",
        },
        {
            title: "Education",
            content:
                "B.Tech in Computer Science & Information Technology\nIPS Academy, Indore | 2022 – 2026 (Expected)\n\nRelevant Coursework:\n• Data Structures & Algorithms\n• Database Management Systems\n• Web Technologies\n• Object-Oriented Programming\n• Computer Networks\n\nKey Achievements:\n• Consistent academic performance\n• Active participation in technical workshops\n• Self-driven learning of modern frameworks",
        },
        {
            title: "Technical Skills",
            content:
                "FRONTEND DEVELOPMENT\n• React.js, Redux, JavaScript (ES6+)\n• HTML5, CSS3, Tailwind CSS\n• Responsive Web Design\n• RESTful APIs Integration\n\nBACKEND DEVELOPMENT\n• Node.js, Express.js\n• MongoDB, Mongoose\n• MySQL Basics\n• JWT Authentication & Authorization\n\nDATA ANALYTICS\n• Python, Pandas, NumPy\n• Power BI, MS Excel\n• Data Visualization & Reporting\n\nTOOLS & VERSION CONTROL\n• Git, GitHub\n• VS Code, Postman\n• npm, yarn package managers",
        },
        {
            title: "Featured Projects",
            content:
                "1. Employee Management System\nTech Stack: MERN (MongoDB, Express, React, Node.js)\n• Implemented secure JWT-based authentication\n• Complete CRUD operations with role-based access\n• Real-time data updates and responsive UI\n• Protected admin dashboard\n\n2. Online Bakery Website (In Progress)\nTech Stack: MERN Stack\n• Dynamic product catalog with categories\n• Shopping cart & checkout functionality\n• Secure payment integration planned\n• Admin panel for inventory management\n\n3. Amazon Clone\nTech Stack: HTML5, CSS3\n• Pixel-perfect replica of Amazon homepage\n• Fully responsive design\n• Clean, semantic markup",
        },
        {
            title: "Experience",
            content:
                "MERN Stack Development Intern\nOngoing Self-Directed Learning | 2024 – Present\n• Built multiple full-stack applications\n• Implemented authentication systems\n• RESTful API design and development\n• State management with Redux/Context API\n\nData Analytics Training\nInd Vibe Infotech | Indore\n• Hands-on training in Python, MySQL, Power BI\n• Created interactive dashboards for:\n  - Amazon sales analytics\n  - Spotify user insights\n  - Shopify e-commerce metrics\n• Data cleaning, transformation, and visualization\n\nCertifications\n• MERN Stack Web Development\n• Data Analytics with Python",
        },
        {
            title: "Get In Touch",
            content:
                "I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!\n\nEMAIL\nthakursinghgourav@gmail.com\n\nPHONE\n+91 8305321778\n\nLOCATION\nIndore, Madhya Pradesh, India\n\nCONNECT WITH ME\nLinkedIn: linkedin.com/in/gourav-thakur-b97634311\n\nFeel free to reach out - I'd love to hear from you!",
        },
    ];

    return (
        <div className="book-container">
            <HTMLFlipBook
                width={550}
                height={750}
                drawShadow={true}
                maxShadowOpacity={0.5}
                showCover={true}
            >
                {/* ===== FRONT COVER ===== */}
                <div className="page cover">
                    <div className="cover-content">
                        <p className="cover-tagline">Portfolio 2025</p>
                        <h1 className="name-gradient">GOURAV THAKUR</h1>
                        <h3>Full Stack MERN Developer</h3>
                        <p className="highlight-text">
                            B.Tech Computer Science & IT
                        </p>
                        <div className="cover-divider"></div>
                        <p className="cover-tagline">Crafting Digital Solutions</p>
                    </div>
                </div>

                {/* ===== INNER PAGES ===== */}
                {pages.map((page, index) => (
                    <div className="page" key={index}>
                        <h2>{page.title}</h2>
                        <p style={{ whiteSpace: "pre-line" }}>
                            {page.content}
                        </p>

                        {/* PAGE NUMBER */}
                        <span className="page-number">
                            {index + 1}
                        </span>
                    </div>
                ))}

                {/* ===== EMPTY PAGE ===== */}
                <div className="page"></div>

                {/* ===== BACK COVER ===== */}
                <div className="page back-cover">
                    <div className="back-cover-content">
                        <p className="back-cover-title">Thank You</p>
                        <p className="back-cover-subtitle">for viewing my portfolio</p>
                        <div className="social-links">
                            <a href="mailto:thakursinghgourav@gmail.com" className="social-link">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                            </a>
                            <a href="https://linkedin.com/in/gourav-thakur-b97634311" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                </svg>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.17.66-.45v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.54.67.45A10.02 10.02 0 0 0 22 12 10 10 0 0 0 12 2z"/>
                                </svg>
                            </a>
                        </div>
                        <p className="back-cover-footer">© 2025 Gourav Thakur</p>
                    </div>
                </div>
            </HTMLFlipBook>
        </div>
    );
};

export default Book;
