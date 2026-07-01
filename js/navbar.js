class PortfolioNavbar extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.split("/").pop() || "index.html";
    
    // Helper to determine active state class
    const isActive = (path) => {
      if (path === "./index.html" && (pageName === "index.html" || pageName === "")) return "active";
      if (path === "./contactMe.html" && pageName === "contactMe.html") return "active";
      if (path === "./portfolio.html" && (pageName === "portfolio.html" || pageName === "projectDetails.html")) return "active";
      return "";
    };

    let navLinksHtml = "";

    if (pageName === "portfolio.html") {
      // Portfolio page navigation with anchor section links
      navLinksHtml = `
        <li class="nav-item">
          <a class="nav-link" href="./index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#education">My Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#certifications">Certifications</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#experience">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#languages">Languages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./contactMe.html">Contact</a>
        </li>
      `;
    } else {
      // Standard navigation for other pages (Home, Project Details, Contact Me)
      navLinksHtml = `
        <li class="nav-item">
          <a class="nav-link ${isActive("./index.html")}" href="./index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${isActive("./portfolio.html")}" href="./portfolio.html">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${isActive("./contactMe.html")}" href="./contactMe.html">Contact</a>
        </li>
      `;
    }

    this.innerHTML = `
      <style>
        /* Base Navigation Styles */
        .navbar {
          background: rgba(8, 27, 41, 0.9) !important;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          padding: 15px 0;
          z-index: 1000;
        }

        .navbar-brand {
          font-weight: 700;
          font-size: 1.5rem;
          color: #00abf0 !important;
          font-family: "Poppins", sans-serif;
        }

        .navbar-nav .nav-link {
          color: #ffffff !important;
          font-weight: 500;
          margin: 0 10px;
          transition: all 0.3s ease;
          position: relative;
          font-family: "Poppins", sans-serif;
        }

        .navbar-nav .nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background: #00abf0;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .navbar-nav .nav-link:hover::after {
          width: 100%;
        }

        .navbar-nav .nav-link:hover {
          color: #00abf0 !important;
        }

        /* Active highlight styling */
        .navbar-nav .nav-link.active {
          color: #00abf0 !important;
        }

        .navbar-nav .nav-link.active::after {
          width: 100% !important;
        }
        
        /* Mobile toggler styling */
        .navbar-toggler {
          border-color: rgba(255, 255, 255, 0.1);
        }
        
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.75%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }
      </style>
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
          <a class="navbar-brand" href="./index.html">Ankan.</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              ${navLinksHtml}
            </ul>
          </div>
        </div>
      </nav>
    `;

    // Navbar background on scroll animation
    const handleScroll = () => {
      const navbar = this.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.background = "rgba(8, 27, 41, 0.3)";
        } else {
          navbar.style.background = "rgba(8, 27, 41, 0.9)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();


  }
}

customElements.define("portfolio-navbar", PortfolioNavbar);
