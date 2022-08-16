import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskModel } from 'src/app/app-user-pages/tasks/tasks.component';
import { TasksService } from 'src/app/services/tasks.service';
import { TaskFormComponent } from '../forms/task-form/task-form.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {
  @Input() task!: TaskModel;
  @Output() deleteFromList = new EventEmitter<number>();
  constructor(
    private taskService: TasksService,
    private snackBat: MatSnackBar,
    private dialog: MatDialog
  ) {}
  public loading = false;
  ngOnInit(): void {}
  imageSrc() {
    let src = `data:${this.task.imageModel.type};base64,${this.task.imageModel.imageBytes}`;

    return src;
  }
  toggleTaskState() {
    this.loading = true;
    this.taskService.toggleTaskState(this.task.id).subscribe({
      next: (response) => {
        this.task.completed = !this.task.completed;

        this.showSuccessSnack('Succesful task state toggle');
        this.loading = false;
      },
      error: (error) => {
        this.showFailedSnack('Ops Something went wrong');
        this.loading = false;
      },
    });
  }

  showSuccessSnack(mes: string) {
    this.snackBat.open('Succesful task state toggle', 'close', {
      duration: 5 * 1000,
      panelClass: ['snackbar-success', 'mat-warn'],
    });
  }
  showFailedSnack(mes: string) {
    this.snackBat.open('Ops Something went wrong', 'close', {
      duration: 5 * 1000,
      panelClass: ['snackbar-failure'],
    });
  }
  viewTask() {
    let ref = this.dialog.open(TaskFormComponent, {
      panelClass: 'custom-dialog-container',
      data: { task: this.task },
    });
  }
  deleteTask() {
    this.taskService.deleteTask(this.task.id).subscribe({
      next: (val) => {
        this.deleteFromList.emit(this.task.id);
        this.showSuccessSnack('Delete Completed Succecfull ');
      },
      error: (err) => {
        this.showSuccessSnack('Ops something went wrong');
      },
    });
  }
  openMenu() {
    let ref = this.dialog.open(OptionsModal, {
      panelClass: 'custom-dialog-container',
      data: { id: this.task.id },
    });
    ref.afterClosed().subscribe((result) => {
      if (result === 'delete') {
        this.deleteTask();
      }
      if (result === 'details') {
        this.viewTask();
      }
    });
  }
}
@Component({
  templateUrl: '../models-templates/options.modal.content.html',
})
class OptionsModal {
  constructor(public dialogRef: MatDialogRef<OptionsModal>) {}

  close(result: any): void {
    this.dialogRef.close(result);
  }
}
