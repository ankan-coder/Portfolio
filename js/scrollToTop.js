class ScrollToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        /* Scroll to Top Button Styles */
        .scroll-to-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 45px;
          height: 45px;
          background: rgba(8, 27, 41, 0.85);
          border: 1px solid rgba(0, 171, 240, 0.3);
          border-radius: 50%;
          color: #00abf0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          cursor: pointer;
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          transform: translateY(20px);
        }

        .scroll-to-top-btn.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .scroll-to-top-btn:hover {
          background: #00abf0;
          color: #081b29;
          border-color: #00abf0;
          box-shadow: 0 10px 25px rgba(0, 171, 240, 0.5);
          transform: scale(1.1) translateY(-2px);
        }

        .scroll-to-top-btn:active {
          transform: scale(0.95);
        }
      </style>
      <div class="scroll-to-top-btn" id="scrollToTopBtn">
        <i class="fas fa-arrow-up"></i>
      </div>
    `;

    const scrollBtn = this.querySelector("#scrollToTopBtn");
    
    // Smooth scroll action on click
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Toggle button visibility based on scroll distance
    const handleScrollBtnVisibility = () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScrollBtnVisibility);
    handleScrollBtnVisibility(); // Check on load
  }
}

customElements.define("scroll-to-top", ScrollToTop);
