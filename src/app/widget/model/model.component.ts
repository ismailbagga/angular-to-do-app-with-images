import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent implements OnInit, OnDestroy {
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) {
    console.log('render');
  }

  ngOnInit(): void {
    console.log('append');

    document.body.append(this.el.nativeElement);
  }
  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }
}
