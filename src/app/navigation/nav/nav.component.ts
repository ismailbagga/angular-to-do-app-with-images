import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskModel } from 'src/app/app-user-pages/tasks/tasks.component';
import { TasksService } from 'src/app/services/tasks.service';
import {
  FileHandler,
  TaskFormComponent,
} from 'src/app/widget/forms/task-form/task-form.component';
import { ModelDTO } from 'src/app/widget/task/task.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  isddlShown = false;
  islogoutModelShown = false;
  constructor(
    private el: ElementRef,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private taskService: TasksService
  ) {}

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
  onSaveTask() {
    console.log('clicked');

    let task: TaskModel = {
      id: -1,
      completed: false,
      task_desc: '',
      taskName: '',
    };
    const model: ModelDTO = {
      task: task,
      isUpdateModel: false,
    };
    let ref = this.dialog.open(TaskFormComponent, {
      panelClass: 'custom-dialog-container',
      data: model,
    });
    ref.componentInstance.save$.subscribe((res) => {
      this.saveTask(res.task, res.file);
    });
  }
  showSuccessSnack(mes: string) {
    this.snackBar.open(mes, 'close', {
      duration: 5 * 1000,
      panelClass: ['snackbar-success', 'mat-warn'],
    });
  }
  showFailedSnack(mes: string) {
    this.snackBar.open(mes, 'close', {
      duration: 5 * 1000,
      panelClass: ['snackbar-failure'],
    });
  }
  saveTask(task: TaskModel, fileHandler: FileHandler) {
    let data = new FormData();

    data.append(
      'task',
      new Blob([JSON.stringify({ ...task, taskId: task.id })], {
        type: 'application/json',
      })
    );

    if (fileHandler.file) data.append('image', fileHandler.file);
    const self = this;
    this.taskService.saveTask(data).subscribe({
      next(value) {
        self.showSuccessSnack('task has been saved');
        self.dialog.closeAll();
      },
      error(err) {
        console.log('ops Something went wrong try again');
      },
    });
  }
}
