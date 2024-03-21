import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-exp-landing2',
  templateUrl: './exp-landing2.component.html',
  styleUrl: './exp-landing2.component.css',
})
export class ExpLanding2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 900, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }
}
