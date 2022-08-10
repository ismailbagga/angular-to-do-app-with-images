import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-warning-header',
  templateUrl: './warning-header.component.html',
})
export class WarningHeaderComponent implements OnInit, OnChanges {
  @Input() text!: string;
  @Output() onHide: EventEmitter<any> = new EventEmitter();
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.text !== '') {
      const obs = new Observable<void>((observer) => {
        setTimeout(() => {
          observer.next();
          observer.complete();
        }, 6000);
      });
      obs.subscribe((val) => {
        this.autoHide();
      });
    }
  }

  ngOnInit(): void {}
  autoHide() {
    this.onHide.emit();
  }
}
