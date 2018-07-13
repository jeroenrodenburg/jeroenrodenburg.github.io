import $ from 'jquery';

class SwitchButton {
  constructor() {
    this.sliderButton = $(".slider");
    this.headerBackground = $(".site-header__overlay");
    this.workContent = $(".page-section__work");
    this.aboutContent = $(".page-section__about");
    this.events();
  }

  events() {
    this.sliderButton.click(this.toggleSwitch.bind(this));
  }

  toggleSwitch() {
    this.headerBackground.toggleClass("site-header__overlay--is-checked")
    this.workContent.toggleClass("page-section__work--is-visible")
    this.aboutContent.toggleClass("page-section__about--is-hidden")
  }
}

export default SwitchButton;