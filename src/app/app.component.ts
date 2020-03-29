import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feedback-Client';

  title1 = '';
   type = 'LineChart';
   data = [[0,0]];
   columnNames = ['# Of Responses', 'Responses'];
   options1 = {    
   };
   width = 550;

   height = 400;
  constructor(private httpClient: HttpClient){
    this.httpClient.get("http://localhost:8080/GetAllData").subscribe(function(data){
      this.data.pop();
      for(let i=0; i<data.length; i++){
        this.data.push([data[i].id, data[i].response])
      }
      console.log(this.data)
    }.bind(this));
  }

  sendResponse(){
    let response = +(<HTMLInputElement>document.getElementById('response')).value/100;
    this.httpClient.post("http://localhost:8080/SendResponse?response="+response,{}).subscribe(data=>console.log(data));
    location.reload()
  }
}
