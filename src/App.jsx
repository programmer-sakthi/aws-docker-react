import React, { useState } from "react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Portfolio data
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with cart functionality, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      image: "/api/placeholder/600/400",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description:
        "Interactive weather application providing real-time forecasts and historical weather data visualization.",
      technologies: ["React", "Chart.js", "Weather API", "Geolocation API"],
      image: "/api/placeholder/600/400",
    },
    {
      id: 3,
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates, task delegation, and progress tracking.",
      technologies: ["React", "Firebase", "Redux", "Material UI"],
      image: "/api/placeholder/600/400",
    },
  ];

  const skills = {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Redux",
      "TypeScript",
      "Sass/SCSS",
      "Tailwind CSS",
    ],
    backend: [
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "RESTful APIs",
      "GraphQL",
    ],
    tools: ["Git", "Webpack", "Figma", "Jest", "Docker", "AWS"],
  };

  // Styles in JSX format
  const styles = {
    // Layout styles
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 0",
      borderBottom: "1px solid #eaeaea",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#2d2d2d",
    },
    navigation: {
      display: "flex",
      gap: "20px",
    },
    navItem: {
      padding: "10px 15px",
      cursor: "pointer",
      borderRadius: "4px",
      transition: "background-color 0.3s",
    },
    navItemActive: {
      backgroundColor: "#f0f0f0",
      fontWeight: "bold",
    },
    content: {
      marginTop: "40px",
      minHeight: "500px",
    },
    footer: {
      marginTop: "60px",
      padding: "20px 0",
      borderTop: "1px solid #eaeaea",
      textAlign: "center",
      color: "#777",
    },

    // Hero section styles
    hero: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "80px 0",
    },
    heroTitle: {
      fontSize: "48px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#2d2d2d",
    },
    heroSubtitle: {
      fontSize: "24px",
      color: "#555",
      marginBottom: "30px",
      maxWidth: "700px",
    },
    button: {
      padding: "12px 24px",
      backgroundColor: "#3498db",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },

    // About section styles
    about: {
      display: "flex",
      gap: "40px",
      alignItems: "center",
      marginBottom: "60px",
    },
    aboutImage: {
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      objectFit: "cover",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    aboutContent: {
      flex: 1,
    },
    sectionTitle: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#2d2d2d",
    },
    aboutText: {
      lineHeight: "1.8",
      color: "#555",
      marginBottom: "20px",
    },

    // Projects section styles
    projectsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      gap: "30px",
      marginTop: "30px",
    },
    projectCard: {
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      transition: "transform 0.3s",
    },
    projectImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    projectContent: {
      padding: "20px",
    },
    projectTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#2d2d2d",
    },
    projectDescription: {
      fontSize: "16px",
      color: "#555",
      marginBottom: "15px",
      lineHeight: "1.6",
    },
    tagContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
    },
    tag: {
      padding: "6px 12px",
      backgroundColor: "#e1e8ed",
      borderRadius: "50px",
      fontSize: "14px",
      color: "#555",
    },

    // Skills section styles
    skillsContainer: {
      marginTop: "30px",
    },
    skillCategory: {
      marginBottom: "30px",
    },
    categoryTitle: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "15px",
      color: "#2d2d2d",
    },
    skillsList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },
    skillItem: {
      padding: "8px 16px",
      backgroundColor: "#e1e8ed",
      borderRadius: "4px",
      fontSize: "15px",
      color: "#555",
    },

    // Contact section styles
    contactForm: {
      maxWidth: "600px",
      margin: "30px auto",
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "16px",
      color: "#555",
    },
    input: {
      width: "100%",
      padding: "12px",
      fontSize: "16px",
      borderRadius: "4px",
      border: "1px solid #ddd",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      fontSize: "16px",
      borderRadius: "4px",
      border: "1px solid #ddd",
      minHeight: "150px",
      boxSizing: "border-box",
      resize: "vertical",
    },
    submitButton: {
      padding: "12px 24px",
      backgroundColor: "#3498db",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
  };

  // Hover styles (applied dynamically)
  const hoverStyles = {
    button: {
      backgroundColor: "#2980b9",
    },
    navItem: {
      backgroundColor: "#f5f5f5",
    },
    projectCard: {
      transform: "translateY(-5px)",
    },
    submitButton: {
      backgroundColor: "#2980b9",
    },
  };

  // Handle hover states
  const [hoveredElements, setHoveredElements] = useState({});

  const handleMouseEnter = (element) => {
    setHoveredElements({
      ...hoveredElements,
      [element]: true,
    });
  };

  const handleMouseLeave = (element) => {
    setHoveredElements({
      ...hoveredElements,
      [element]: false,
    });
  };

  // Tab switching
  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div>
            <section style={styles.hero}>
              <h1 style={styles.heroTitle}>John Doe</h1>
              <p style={styles.heroSubtitle}>
                Full Stack Developer passionate about creating beautiful,
                functional applications that solve real-world problems.
              </p>
              <button
                style={{
                  ...styles.button,
                  ...(hoveredElements.heroButton ? hoverStyles.button : {}),
                }}
                onMouseEnter={() => handleMouseEnter("heroButton")}
                onMouseLeave={() => handleMouseLeave("heroButton")}
                onClick={() => setActiveTab("contact")}
              >
                Get In Touch
              </button>
            </section>

            <section style={styles.about}>
              <img
                src="/api/placeholder/600/600"
                alt="Profile"
                style={styles.aboutImage}
              />
              <div style={styles.aboutContent}>
                <h2 style={styles.sectionTitle}>About Me</h2>
                <p style={styles.aboutText}>
                  Hello! I'm a passionate Full Stack Developer with over 5 years
                  of experience building web applications. I specialize in
                  creating responsive, user-friendly interfaces using modern
                  JavaScript frameworks, particularly React, and building robust
                  backend systems with Node.js.
                </p>
                <p style={styles.aboutText}>
                  My approach to development centers around creating clean,
                  maintainable code that delivers exceptional user experiences.
                  I enjoy tackling complex problems and continuously learning
                  new technologies to stay at the forefront of web development.
                </p>
                <button
                  style={{
                    ...styles.button,
                    ...(hoveredElements.resumeButton ? hoverStyles.button : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter("resumeButton")}
                  onMouseLeave={() => handleMouseLeave("resumeButton")}
                >
                  Download Resume
                </button>
              </div>
            </section>
          </div>
        );

      case "projects":
        return (
          <div>
            <h2 style={styles.sectionTitle}>My Projects</h2>
            <p style={{ ...styles.aboutText, marginBottom: "30px" }}>
              Here are some of the projects I've worked on. Each project
              demonstrates different skills and technologies.
            </p>

            <div style={styles.projectsGrid}>
              {projects.map((project) => (
                <div
                  key={project.id}
                  style={{
                    ...styles.projectCard,
                    ...(hoveredElements[`project-${project.id}`]
                      ? hoverStyles.projectCard
                      : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter(`project-${project.id}`)}
                  onMouseLeave={() => handleMouseLeave(`project-${project.id}`)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={styles.projectImage}
                  />
                  <div style={styles.projectContent}>
                    <h3 style={styles.projectTitle}>{project.title}</h3>
                    <p style={styles.projectDescription}>
                      {project.description}
                    </p>
                    <div style={styles.tagContainer}>
                      {project.technologies.map((tech, index) => (
                        <span key={index} style={styles.tag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "skills":
        return (
          <div>
            <h2 style={styles.sectionTitle}>Skills & Expertise</h2>
            <p style={{ ...styles.aboutText, marginBottom: "30px" }}>
              I've acquired a diverse range of skills throughout my career.
              Here's a breakdown of my technical expertise:
            </p>

            <div style={styles.skillsContainer}>
              <div style={styles.skillCategory}>
                <h3 style={styles.categoryTitle}>Frontend Development</h3>
                <div style={styles.skillsList}>
                  {skills.frontend.map((skill, index) => (
                    <span key={index} style={styles.skillItem}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div style={styles.skillCategory}>
                <h3 style={styles.categoryTitle}>Backend Development</h3>
                <div style={styles.skillsList}>
                  {skills.backend.map((skill, index) => (
                    <span key={index} style={styles.skillItem}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div style={styles.skillCategory}>
                <h3 style={styles.categoryTitle}>Tools & Technologies</h3>
                <div style={styles.skillsList}>
                  {skills.tools.map((skill, index) => (
                    <span key={index} style={styles.skillItem}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "contact":
        return (
          <div>
            <h2 style={styles.sectionTitle}>Get In Touch</h2>
            <p
              style={{
                ...styles.aboutText,
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out!
            </p>

            <form style={styles.contactForm}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name</label>
                <input
                  type="text"
                  style={styles.input}
                  placeholder="Your name"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input
                  type="email"
                  style={styles.input}
                  placeholder="Your email"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Subject</label>
                <input type="text" style={styles.input} placeholder="Subject" />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Message</label>
                <textarea
                  style={styles.textarea}
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  ...styles.submitButton,
                  ...(hoveredElements.contactButton
                    ? hoverStyles.submitButton
                    : {}),
                }}
                onMouseEnter={() => handleMouseEnter("contactButton")}
                onMouseLeave={() => handleMouseLeave("contactButton")}
              >
                Send Message
              </button>
            </form>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>JD</div>
        <nav style={styles.navigation}>
          {["about", "projects", "skills", "contact"].map((tab) => (
            <div
              key={tab}
              style={{
                ...styles.navItem,
                ...(activeTab === tab ? styles.navItemActive : {}),
                ...(hoveredElements[`nav-${tab}`] && activeTab !== tab
                  ? hoverStyles.navItem
                  : {}),
              }}
              onClick={() => setActiveTab(tab)}
              onMouseEnter={() => handleMouseEnter(`nav-${tab}`)}
              onMouseLeave={() => handleMouseLeave(`nav-${tab}`)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </nav>
      </header>

      <main style={styles.content}>{renderContent()}</main>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
