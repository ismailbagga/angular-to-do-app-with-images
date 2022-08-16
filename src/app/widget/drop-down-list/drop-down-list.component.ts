import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
})
export class DropDownListComponent implements OnInit, OnDestroy {
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() show: EventEmitter<any> = new EventEmitter();
  isFirstTime = true;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
  }
  ngOnDestroy(): void {}
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    let tapEl = event.target as HTMLElement;

    if (this.isFirstTime) {
      this.isFirstTime = false;

      return;
    }


    this.close.emit();
  }
}
