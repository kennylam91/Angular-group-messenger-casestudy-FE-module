import {Injectable} from '@angular/core';
import {IMessage} from '../model/message';
import * as $ from 'jquery';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private readonly API_URL = 'http://my-json-server.typicode.com/kennylam91/test_api_server/messages';
  messageList: IMessage[];

  constructor(private http: HttpClient) {
  }

  getMessages(): Observable<IMessage[]> {
    return this.http.get<IMessage[]>(this.API_URL)
      // .pipe(map(response => response.filter((message, i) => i < count)))
      ;
  }

  createMessage(mes: IMessage): Observable<IMessage> {
    return this.http.post<IMessage>(this.API_URL, mes);
  }

  scrollAllMessage() {
    $(document).ready(() => {
      const scrollHeight = document.getElementById('all-message').scrollHeight;
      $('#all-message').scrollTop(scrollHeight);
      console.log(scrollHeight);
    });
  }

}
