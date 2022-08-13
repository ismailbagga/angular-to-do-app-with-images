import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cirlce',
  templateUrl: './cirlce.component.html',
})
export class CirlceComponent implements OnInit {
  @Input() count = 0;
  @Input() icon = '';
  @Input() complete!: boolean;
  constructor() {}

  ngOnInit(): void {}
}
