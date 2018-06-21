import $ from 'jquery';

class SwitchButton {
  constructor() {
    this.sliderButton = $(".slider");
    this.workContent = $(".page-section__work");
    this.aboutContent = $(".page-section__about");
    this.events();
  }

  events() {
    this.sliderButton.click(this.toggleSwitch.bind(this));
  }

  toggleSwitch() {
    this.workContent.toggleClass("page-section__work--is-visible")
    this.aboutContent.toggleClass("page-section__about--is-hidden")
  }
}

export default SwitchButton;