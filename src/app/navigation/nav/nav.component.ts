import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  isddlShown = false;
  islogoutModelShown = false;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  profileIconClicked(e: Event) {
    if (this.isddlShown) {
      this.isddlShown = false;
    }
  }
  toggle() {
    console.log('clicked');

    this.isddlShown = !this.isddlShown;
  }
}
