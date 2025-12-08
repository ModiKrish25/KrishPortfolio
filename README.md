ModiKrish 3D Portfolio

A fully immersive, 3D interactive portfolio website designed to showcase projects and skills with a modern aesthetic. This project utilizes Three.js for a dynamic background and CSS3 3D transforms for interactive UI elements, creating a unique user experience without relying on heavy external frameworks.

🚀 Features

Immersive 3D Background: A starfield simulation created with Three.js that responds to mouse movement.

3D Tilt Cards: Interactive content cards that tilt in 3D space based on mouse position using vanilla JavaScript and CSS perspective.

Glassmorphism UI: Modern, translucent card design with backdrop blurs.

Pure CSS 3D Assets: Rotating 3D cubes created entirely with CSS (no image files required) to represent projects.

Black & White Mode: A toggleable high-contrast grayscale mode for accessibility and visual preference.

Responsive Design: Fully responsive grid layouts for projects and tech stacks that adapt to mobile and desktop screens.

Scroll Animations: Elements reveal themselves smoothly as the user scrolls down the page.

🛠️ Tech Stack

HTML5: Semantic markup structure.

CSS3: Advanced styling including 3D transforms, animations, flexbox, grid, and glassmorphism effects.

JavaScript (ES6+): Logic for 3D interactions, scroll observers, and Three.js initialization.

Three.js: Used for the background particle system/starfield.

Font Awesome: Scalable vector icons.

Google Fonts: Typography using the 'Urbanist' font family.

📂 Project Structure

This is a single-file project for simplicity and ease of deployment. All HTML, CSS, and JavaScript are contained within modikrish_portfolio_3d.html.

Background Setup: The <canvas id="bg-canvas"> and associated Three.js script handle the starfield.

Styles: CSS variables and classes define the 3D shapes (.cube-scene), glass cards (.slide-card), and animations.

Content: Sections for Home, About, Projects, Tech Stack, and Contact.

🔧 How to Use

Download: Download the modikrish_portfolio_3d.html file.

Run: Simply open the file in any modern web browser (Chrome, Firefox, Edge, Safari). No server is required.

Deploy: You can upload this single file to GitHub Pages, Netlify, or Vercel to host it live.

🎨 Customization Guide

To personalize this portfolio, open the HTML file in a code editor:

1. Changing Links

Search for the current links and replace them with your own:

GitHub: https://github.com/ModiKrish25

LinkedIn: https://www.linkedin.com/in/modi-krish-9b944b341/

Email: mailto:modikrish.lj.2023@gmail.com

2. Adding a New Project

Copy the HTML block for a .project-card inside the .projects-grid container and update the text/icons:

<!-- Example Project Card Structure -->
<div class="project-card js-tilt">
    <div class="visual-side">
        <!-- Change theme class: blue-theme, green-theme, orange-theme, purple-theme -->
        <div class="cube-scene purple-theme">
            <!-- Update icons inside .cube-face divs -->
            <div class="cube-face face-front"><i class="fa-solid fa-code"></i></div>
            ...
        </div>
    </div>
    <div class="content-side">
        <h2>Project Name</h2>
        <h3>Subtitle</h3>
        <p>Description...</p>
        <p class="highlight">Tech Stack</p>
        <a href="#" class="cta-btn">View Code</a>
    </div>
</div>


3. Modifying the 3D Background

Locate the Three.js script section at the bottom of the file. You can adjust:

starsCount: Number of stars.

starsMaterial.color: Color of the stars (currently 0x3b82f6).

camera.position.z: Zoom level of the camera.

📬 Contact

Name: Krish Modi

Email: modikrish.lj.2023@gmail.com

GitHub: ModiKrish25

Built with ❤️ using Code, AI & 3D Web Technologies.
