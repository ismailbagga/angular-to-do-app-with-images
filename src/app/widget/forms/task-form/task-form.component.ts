import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TaskModel } from 'src/app/app-user-pages/tasks/tasks.component';
import {
  AppFormGroup,
  AuthSuperComponent,
} from 'src/app/auth/AuthSuperComponent';

export interface fileHandler {
  file: File | null;
  url: SafeUrl | null;
}

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent extends AppFormGroup implements OnInit {
  @Input('task') task!: TaskModel;
  @ViewChild('imageRef') imageRef!: HTMLImageElement;
  fileHandler: fileHandler = { file: null, url: null };
  imageSrc?: SafeUrl;
  fileChanged = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) task: TaskModel,
    private sanitizer: DomSanitizer
  ) {
    super();
    this.task = task;
  }

  onClick(event: Event) {}

  ngOnInit(): void {
    console.log('on init');

    let temp = new FormGroup({
      taskName: new FormControl(this.task.taskName, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      taskDesc: new FormControl(this.task.task_desc, [
        Validators.required,
        Validators.maxLength(244),
      ]),
      completed: new FormControl(this.task.completed, [Validators.required]),
      // image: new FormControl(
      //   this.task.imageModel ? this.task.imageModel.imageBytes : null
      // ),
      createdAt: new FormControl({
        value: this.task.createdAt,
        disabled: true,
      }),
      updatedAt: new FormControl({
        value: this.task.updatedAt,
        disabled: true,
      }),
    });
    console.log(temp);
    this.setFormGroup(temp);
    this.form.get('image')?.valueChanges.subscribe((image) => {
      // console.log(safeUrl);
      // this.imageRef.src = safeUrl.toString();
      // console.log(this.imageRef);
    });
  }
  onFileSelected(event: any) {
    console.log(event.target.files.length);

    if (event.target.files.length > 0) {
      this.fileChanged = true;
      let file = event.target.files[0];
      this.fileHandler.file = file;
      this.fileHandler.url = this.sanitizer.bypassSecurityTrustResourceUrl(
        window.URL.createObjectURL(file)
      );
      console.log(this.fileHandler.url);
    } else {
      this.fileChanged = false;
    }

    console.log(event.target);
  }
}
