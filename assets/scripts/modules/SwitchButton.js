class SwitchButton {
  constructor() {
    this.sliderButton = document.querySelector(".slider");
    this.headerBackground = document.querySelector(".site-header__overlay");
    this.workContent = document.querySelector(".page-section__work");
    this.aboutContent = document.querySelector(".page-section__about");
    this.events();
  }

  events() {
    this.sliderButton.addEventListener('click', () => {
      this.toggleSwitch();
    });
  }

  toggleSwitch() {
    this.headerBackground.classList.toggle("site-header__overlay--is-checked");
    this.workContent.classList.toggle("page-section__work--is-visible");
    this.aboutContent.classList.toggle("page-section__about--is-hidden");
  }
}

export default SwitchButton;