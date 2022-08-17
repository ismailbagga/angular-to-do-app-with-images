import { HttpParams } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filterParams, TasksService } from 'src/app/services/tasks.service';
export interface ImageModel {
  id?: number;
  name: string;
  type: string;
  imageBytes: string;
}
export interface TaskModel {
  id: number;
  taskName: string;
  task_desc: string;
  createdAt?: Date;
  updateAt?: Date;
  completed: boolean;
  imageModel?: ImageModel;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent implements OnInit {
  tasks: TaskModel[] = [];
  loading = true;
  constructor(
    private taskService: TasksService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((val) => {
      // console.log(val);

      this.fetchTasks(val);
    });
  }
  fetchTasks(params: filterParams) {
    this.taskService.findTasks(params).subscribe({
      next: (tasks) => {
        this.loading = false;
        this.tasks = tasks;
      },
      error: (err) => {},
    });
  }
  deleteTaskById(id: number) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }

  trackByFn(index: number, task: TaskModel) {
    return task.id;
  }
}
