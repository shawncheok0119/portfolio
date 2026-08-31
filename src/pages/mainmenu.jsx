import "./mainmenu.css";
import { projects, experience, skills, education } from "./data.js";
import { useState, useRef } from "react";
import githubIcon from "../assets/github.png";
import instaIcon from "../assets/insta.png";
import gmailIcon from "../assets/gmail.png";
import websiteIcon from "../assets/website.png";
import linkinIcon from "../assets/linkin.png";
import githubwhiteIcon from "../assets/githubwhite.png";
import docsIcon from "../assets/doc.png";

function ExperienceGroup({ title, category }) {
  const filteredExperience = experience.filter(
    (exp) => exp.category === category
  );

  return (
    <div className="experience-group">
      <h3 className="experience-group-title">{title}</h3>

      <div className="timeline">
        {filteredExperience.map((exp, index) => (
          <div
            className="timeline-item"
            key={`${exp.title}-${exp.duration}-${index}`}
          >
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-card">
              <p className="timeline-duration">
                {exp.duration}
              </p>

              <h3>{exp.title}</h3>

              {(exp.company || exp.club) && (
                <p className="timeline-company">
                  {exp.company || exp.club}
                </p>
              )}

              {exp.description && (
                <p className="timeline-description">
                  {exp.description}
                </p>
              )}

              {exp.tags && exp.tags.length > 0 && (
                <div className="experience-tags">
                  {exp.tags.map((tag) => (
                    <span key={`${exp.title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MainMenu() {
  const [currentProject, setCurrentProject] = useState(0);
  const projectGridRef = useRef(null);

  const handleProjectScroll = () => {
    const container = projectGridRef.current;

    if (!container) return;

    const cards = container.querySelectorAll(".project-card");

    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth;
    const gap = 18;

    const index = Math.round(
      container.scrollLeft / (cardWidth + gap)
    );

    setCurrentProject(index);
  };

  return (
    <div className="app">
        <header className="navbar">
            <div className="logo">
            Shawn.
            </div>

            <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            </nav>
        </header>
      {/* HOME */}
      <section id="home" className="hero">
        <h1>Cheok Shawn Ann</h1>
        <h2>Software Developer</h2>

        <p className="hero-description">
          I build web, mobile, and software applications using modern
          technologies.
        </p>

        <div className="hero-buttons">

  <a href="#projects" className="primary-btn">
    View Projects
  </a>

  <a
    href="https://github.com/shawncheok0119"
    target="_blank"
    rel="noreferrer"
    className="secondary-btn"
  >
    <img
      src={githubIcon}
      alt="GitHub"
      className="button-icon"
    />
    GitHub
  </a>

</div>
      </section>


      {/* ABOUT */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          I am Shawn which is a fresh Software Engineering graduate from Asia Pacific University (APU). I have a strong interest in building practical and user-focused applications, Besides that, I also enjoy turning ideas into functional software while continuously exploring new technologies.
          <br></br>
          <br></br>
          I have hands-on experience in developing web and mobile applications using technologies such as React, Flutter, Java, and SQL. In the academic projects and internship experience have been exposed to various areas of software development which including front-end development, back-end development, full-stack development, database development, software testing, business analysis, and system functional analysis.
          <br></br>
          <br></br>
          I also actively participated in university clubs and events to gained experience in problem-solving, risk management, project timeline management, teamwork, and communication. In these experience, I working with different teams and organizing activities helped me become more adaptable, responsible, and confident.
          <br></br>
          <br></br>
          I am eager to continue learning, take on new challenges and apply both my technical and interpersonal skills to real-world software projects. In need more information and project can referred in this portfolio. Thank you for visiting my portfolio! I hope you enjoyed learning more about my journey and projects.
          <br></br>
          <br></br>
          Have a great day! 😊
        </p>
      </section>

      
<section id="skills" className="section skills-section">
  <h2 className="section-title">Skills</h2>

  <p className="skills-description">
    My current technical and language proficiency based on my experience
    working with different technologies and projects.
  </p>

  {/* PROFICIENCY LEGEND */}
  <div className="skill-legend">
    <h3>Proficiency Levels</h3>

    <div className="legend-items">
      <div className="legend-item">
        <span className="legend-dot expert"></span>
        <span>90% and above: Expert</span>
      </div>

      <div className="legend-item">
        <span className="legend-dot advanced"></span>
        <span>70% - 89%: Advanced</span>
      </div>

      <div className="legend-item">
        <span className="legend-dot intermediate"></span>
        <span>40% - 69%: Intermediate</span>
      </div>

      <div className="legend-item">
        <span className="legend-dot beginner"></span>
        <span>Below 40%: Beginner</span>
      </div>
    </div>
  </div>


  {/* TECHNICAL */}
  <div className="skill-category-section">

    <h3 className="skill-category-title">
      Technical Skills
    </h3>

    <div className="skills-grid">
{skills
  .filter((skill) => skill.category === "Technical")
  .map((skill, index) => {
    const levelClass =
      skill.level >= 90
        ? "expert"
        : skill.level >= 70
        ? "advanced"
        : skill.level >= 40
        ? "intermediate"
        : "beginner";

    const ringColor = {
      expert: "#2563eb",
      advanced: "#22c55e",
      intermediate: "#f59e0b",
      beginner: "#ef4444",
    }[levelClass];

    return (
      <div className="skill-card" key={`${skill.name}-${index}`}>
        <div
          className="skill-ring"
          style={{ "--pct": skill.level, "--ring-color": ringColor }}
        >
          <div className="skill-ring-inner">
            {skill.icon ? (
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon"
              />
            ) : (
              <span>{skill.name.slice(0, 2)}</span>
            )}
          </div>
        </div>

        <div className="skill-info">
          <h4>{skill.name}</h4>
          <span className={`skill-percent ${levelClass}`}>
            {skill.level}%
          </span>
        </div>
      </div>
    );
  })}
    </div>
  </div>


  {/* LANGUAGE */}
  <div className="skill-category-section">

    <h3 className="skill-category-title">
      Languages
    </h3>

    <div className="skills-grid">

      {skills
        .filter((skill) => skill.category === "Language")
        .map((skill, index) => (
          <div
            className="skill-card"
            key={`${skill.name}-${index}`}
          >

            <div className="skill-info">

              <div className="skill-header">

                <h4>
                  {skill.name}
                </h4>

                <span>
                  {skill.level}%
                </span>

              </div>

              <div className="progress-bar">

                <div
                  className={`progress-fill ${
                    skill.level >= 90
                      ? "expert"
                      : skill.level >= 70
                      ? "advanced"
                      : skill.level >= 40
                      ? "intermediate"
                      : "beginner"
                  }`}
                  style={{
                    width: `${skill.level}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
</section>

{/* EDUCATION */}
<section id="education" className="section">
  <h2 className="section-title">Education</h2>

  <div className="education-grid">
    <div className="experience-group">
      <h3 className="experience-group-title">
        Academic Background
      </h3>

      <div className="timeline">
        {education.map((edu, index) => (
          <div
            className="timeline-item"
            key={`${edu.title}-${edu.duration}-${index}`}
          >
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-card">
              <p className="timeline-duration">
                {edu.duration}
              </p>

              <h3>{edu.title}</h3>

              {edu.institution && (
                <p className="timeline-company">
                  {edu.institution}
                </p>
              )}

              {edu.description && (
                <p className="timeline-description">
                  {edu.description}
                </p>
              )}

              {edu.tags && edu.tags.length > 0 && (
                <div className="experience-tags">
                  {edu.tags.map((tag) => (
                    <span key={`${edu.title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>

        <div className="experience-grid">

          <ExperienceGroup
            title="Internship"
            category="Internship"
          />

          <ExperienceGroup
            title="Competition"
            category="Competition"
          />

          <ExperienceGroup
            title="Club"
            category="Club"
          />

          <ExperienceGroup
            title="Event"
            category="Event"
          />

        </div>
      </section>


      {/* PROJECTS */}
<section id="projects" className="section">

  <h2 className="section-title">
    Featured Projects
  </h2>

  <div className="project-counter">
    <span className="current-project">
      {currentProject + 1}
    </span>

    <span className="counter-divider">
      {" / "}
    </span>

    <span>
      {projects.length}
    </span>
  </div>

  <div
    className="projects-grid"
    ref={projectGridRef}
    onScroll={handleProjectScroll}
  >

    {projects.map((project, index) => (

      <div
        className="project-card"
        key={`${project.title}-${index}`}
      >

        <div className="project-image">
          <span>Project Screenshot</span>
        </div>

        <div className="project-content">

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          {project.tech &&
            project.tech.length > 0 && (

            <div className="tech-list">

              {project.tech.map((item) => (

                <span
                  key={`${project.title}-${item}`}
                >
                  {item}
                </span>

              ))}

            </div>

          )}

{(project.github || project.website) && (
  <div className="project-buttons">

    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="github-btn"
      >
        <img
          src={githubwhiteIcon}
          alt="GitHubWhite"
          className="button-icon"
        />
        View GitHub
      </a>
    )}

    {project.documentation && (
      <a
        href={project.documentation}
        target="_blank"
        rel="noopener noreferrer"
        className="docs-btn"
      >
        <img
          src={docsIcon}
          alt="Docs"
          className="button-icon"
        />
        View Docs
      </a>
    )}

    {project.website && (
      <a
        href={project.website}
        target="_blank"
        rel="noreferrer"
        className="website-btn"
      >
        <img
          src={websiteIcon}
          alt="Website"
          className="button-icon"
        />
        Visit Website
      </a>
    )}

  </div>
)}

        </div>

      </div>

    ))}

  </div>

</section>


            {/* CONTACT */}
        <section id="contact" className="section contact-section">
            <h2 className="section-title">Contact Me</h2>

                <div className="contact-grid">

            <a
                href="mailto:shawncheok0119@gmail.com"
                className="contact-card"
            >
                <img
                src={gmailIcon}
                alt="Email"
                className="contact-icon"
                />

                <div>
                <h3>Email</h3>
                <p>shawncheok0119@gmail.com</p>
                </div>
            </a>


            <a
                href="https://github.com/shawncheok0119"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
            >
                <img
                src={githubIcon}
                alt="GitHub"
                className="contact-icon"
                />

                <div>
                <h3>GitHub</h3>
                <p>github.com/shawncheok0119</p>
                </div>
            </a>


            <a
                href="https://www.linkedin.com/in/shawn-ann-cheok-7410172ba"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
            >
                <img
                src={linkinIcon}
                alt="LinkedIn"
                className="contact-icon"
                />

                <div>
                <h3>LinkedIn</h3>
                <p>View LinkedIn</p>
                </div>
            </a>

            </div>
        </section>


      <footer>
        <p>
          © 2026 Cheok Shawn Ann. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default MainMenu;