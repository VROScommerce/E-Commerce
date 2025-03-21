class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector("details");
    this.content = this.mainDetailsToggle.querySelector("summary")?.nextElementSibling;
    this.animations = null;

    if (this.mainDetailsToggle) {
      this.mainDetailsToggle.addEventListener("focusout", this.onFocusOut.bind(this));
      this.mainDetailsToggle.addEventListener("toggle", this.onToggle.bind(this));
    }
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) {
        this.close();
      }
    }, 50); // Pequeño retraso para evitar llamadas innecesarias
  }

  onToggle() {
    if (!this.content) return;

    if (!this.animations) {
      this.animations = this.content.getAnimations();
    }

    if (this.mainDetailsToggle.hasAttribute("open")) {
      this.animations.forEach(animation => animation.play());
    } else {
      this.animations.forEach(animation => animation.cancel());
    }
  }

  close() {
    requestAnimationFrame(() => {
      this.mainDetailsToggle.removeAttribute("open");
      this.mainDetailsToggle.querySelector("summary").setAttribute("aria-expanded", "false");
    });
  }
}

customElements.define("details-disclosure", DetailsDisclosure);

class HeaderMenu extends DetailsDisclosure {
  constructor() {
    super();
    this.header = document.querySelector(".header-wrapper");
    this.headerBottomCached = null;
  }

  onToggle() {
    if (!this.header) return;

    this.header.preventHide = this.mainDetailsToggle.open;

    if (!this.headerBottomCached) {
      this.headerBottomCached = Math.floor(this.header.getBoundingClientRect().bottom);
      document.documentElement.style.setProperty("--header-bottom-position-desktop", `${this.headerBottomCached}px`);
    }
  }
}

customElements.define("header-menu", HeaderMenu);

