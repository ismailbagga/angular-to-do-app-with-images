import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Sanitizer,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import {
  ImageModel,
  TaskModel,
} from 'src/app/app-user-pages/tasks/tasks.component';
import { TasksService } from 'src/app/services/tasks.service';
import {
  FileHandler,
  TaskFormComponent,
} from '../forms/task-form/task-form.component';
export interface ModelDTO {
  task: TaskModel;
  isUpdateModel: boolean;
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {
  @Input() task!: TaskModel;
  @Output() deleteFromList = new EventEmitter<number>();
  // @Output() updadeFromList = new EventEmitter<{}>();
  public loading = false;
  public isPageUpdated = false;
  public src!: any;
  constructor(
    private taskService: TasksService,
    private snackBat: MatSnackBar,
    private dialog: MatDialog,
    private sanitizer: DomSanitizer // private ref: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.imageSrc();
  }
  imageSrc() {
    return `data:${this.task.imageModel?.type};base64,${this.task.imageModel?.imageBytes}`;

    // return src;
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
    this.snackBat.open(mes, 'close', {
      duration: 5 * 1000,
      panelClass: ['snackbar-success', 'mat-warn'],
    });
  }
  showFailedSnack(mes: string) {
    this.snackBat.open(mes, 'close', {
      duration: 5 * 1000,
      panelClass: ['snackbar-failure'],
    });
  }
  viewTask() {
    const model: ModelDTO = {
      task: this.task,
      isUpdateModel: true,
    };
    let ref = this.dialog.open(TaskFormComponent, {
      panelClass: 'custom-dialog-container',
      data: model,
    });
    ref.componentInstance.save$.subscribe((res) => {
      this.updateTask(res.task, res.file);
    });
  }

  updateTask(task: TaskModel, fileHandler: FileHandler) {
    let data = new FormData();

    data.append(
      'task',
      new Blob([JSON.stringify({ ...task, taskId: task.id })], {
        type: 'application/json',
      })
    );

    if (fileHandler.file) data.append('image', fileHandler.file);

    this.taskService.updateTask(data).subscribe({
      next: (res: any) => {
        this.task.taskName = task.taskName;

        this.task.completed = task.completed;

        this.task.task_desc = task.task_desc;

        if (res) this.task.imageModel = res;
      },
      error: (err) => {},
    });
  }

  taskState() {
    return this.task.completed;
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
