import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feedback-Client';
  question;
  options;

  constructor(private httpClient: HttpClient){
    this.httpClient.get("http://localhost:8080/question").subscribe(function(data){
      this.question = data;
    }.bind(this));
    this.httpClient.get("http://localhost:8080/options").subscribe(function(data){
      this.options = data;
    }.bind(this));
  }

  sendResponse(id){
    this.httpClient.get("http://localhost:8080/response?optionId="+id).subscribe(data=>console.log(data));
    // location.reload()
  }
}
