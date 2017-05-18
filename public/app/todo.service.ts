import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Todo } from './todo';

@Injectable()
export class TodoService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  private todosApiUrl = '/api/todos/test'; //call to nodejs api 
  
  constructor(private http: Http) { }
    
    //promise to send a list of todos as long you get it
  getTodos(): Promise<Todo[]> {
    return this.http.get(this.todosApiUrl) //get the URL
               .toPromise() //convert into a promise 
               .then(response => response.json() as Todo[]) //.then is callback, emit the event, get the http response (json) and store that as an array of list of todos
  }
}