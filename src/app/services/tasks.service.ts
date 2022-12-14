import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TaskModel } from '../app-user-pages/tasks/tasks.component';
import { AppUserService } from './app-user/app-user.service';
export interface filterParams {
  page?: number;
  term?: string;
  order?: 'newest' | 'oldest';
  state?: 'all' | 'completed' | 'uncompleted';
}

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  username: string = '';
  obs = new Observable();
  rootUrl = `${environment.backendUrl}/tasks`;
  constructor(private userSevice: AppUserService, private http: HttpClient) {}
  findTasks(params: filterParams) {
    let apiParams = new HttpParams();
    // apiParams = apiParams.set('test', 'test');
    params.page != null ? (apiParams = apiParams.set('p', params.page)) : null;
    params.term != null ? (apiParams = apiParams.set('q', params.term)) : null;
    params.order != null
      ? (apiParams = apiParams.set(
          'o',
          params.order === 'newest' ? 'DESC' : 'ASC'
        ))
      : null;
    params.state != null
      ? (apiParams = apiParams.set('c', params.state.toUpperCase()))
      : null;

    return this.http.get<TaskModel[]>(this.rootUrl + '/all', {
      params: apiParams,
    });
  }
  saveTask(data: FormData) {
    return this.http.post(this.rootUrl, data);
  }
  toggleTaskState(id: number) {
    let params = new HttpParams();
    params = params.set('taskId', id);

    return this.http.post(this.rootUrl + '/like', {}, { params: params });
  }
  deleteTask(id: number) {
    return this.http.delete(`${this.rootUrl}/${id}`);
  }
  updateTask(formData: FormData) {
    return this.http.patch(this.rootUrl, formData);
  }
}
