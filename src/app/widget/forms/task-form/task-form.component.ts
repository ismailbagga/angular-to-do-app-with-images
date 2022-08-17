import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
  ImageModel,
  TaskModel,
} from 'src/app/app-user-pages/tasks/tasks.component';
import {
  AppFormGroup,
  AuthSuperComponent,
} from 'src/app/auth/AuthSuperComponent';
import { TasksService } from 'src/app/services/tasks.service';

export interface FileHandler {
  file: File | null;
  url: SafeUrl | null;
}

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent extends AppFormGroup implements OnInit {
  @Output() save$ = new EventEmitter<any>();

  task!: TaskModel;
  fileHandler: FileHandler = { file: null, url: null };
  fileChanged = false;
  MAX_BITS = 1048576;
  isUpdateModel: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    data: {
      task: TaskModel;
      isUpdateModel: boolean;
    },
    private sanitizer: DomSanitizer,
    private snackBat: MatSnackBar,
    private taskService: TasksService
  ) {
    super();
    this.task = data.task;
    this.isUpdateModel = data.isUpdateModel;
  }

  ngOnInit(): void {
    let temp = new FormGroup({
      taskName: new FormControl(this.task.taskName, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      task_desc: new FormControl(this.task.task_desc, [
        Validators.required,
        Validators.maxLength(244),
      ]),
      completed: new FormControl(this.task.completed, [Validators.required]),

      createdAt: new FormControl({
        value: this.task.createdAt,
        disabled: true,
      }),
      updateAt: new FormControl({
        value: this.task.updateAt,
        disabled: true,
      }),
    });
    console.log(this.task.createdAt);

    this.setFormGroup(temp);
  }
  imageSrc() {
    if (this.fileHandler.url === null && this.task.imageModel === undefined)
      return null;
    if (this.fileHandler.url !== null) return this.fileHandler.url;

    // console.log(this.task);

    let src = `data:${this.task.imageModel?.type};base64,${this.task.imageModel?.imageBytes}`;

    return src;
  }
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.fileChanged = true;
      let file = event.target.files[0];

      this.fileHandler.file = file;
      this.fileHandler.url = this.sanitizer.bypassSecurityTrustResourceUrl(
        window.URL.createObjectURL(file)
      );
    } else {
      this.fileChanged = false;
    }
  }
  onSave(event: Event) {
    event.preventDefault();

    if (this.form.invalid) {
      return;
    }
    if (this.isFileValid()) {
      this.save$.emit({
        task: { ...this.form.value, id: this.task.id },
        file: this.fileHandler,
      });
    }
  }
  isFileValid() {
    let isValid = false;
    if (this.isUpdateModel && !this.fileChanged) return true;

    if (this.fileHandler.file == null) {
      this.snackBat.open('Task Must have an image', 'close', {
        duration: 5 * 1000,
        panelClass: ['snackbar-failure'],
      });

      return false;
    }
    if (this.fileHandler.file.size > this.MAX_BITS) {
      this.snackBat.open('Max image size is 1MB', 'close', {
        duration: 5 * 1000,
        panelClass: ['snackbar-failure'],
      });
      return false;
    }
    if (
      !['image/jpeg', 'image/png', 'image/gif'].includes(
        this.fileHandler.file.type
      )
    ) {
      console.log(this.fileHandler.file.type);

      this.snackBat.open(
        'Image must have type of png , jpeg or git ',
        'close',
        {
          duration: 5 * 1000,
          panelClass: ['snackbar-failure'],
        }
      );
      return false;
    }
    return true;
  }
}
