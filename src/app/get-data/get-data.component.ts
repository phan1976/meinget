import { Component } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent {

  constructor(private httpServerService: HttpServerService){}

  public ngOnInit():void {
    this.httpServerService.getComments().subscribe(data => {
      console.log('du lieu tra ve', data);
    });

    this.httpServerService.getRandomUsers(15).subscribe(users => {
      console.log('day la nhung user ', users.results);
    })
  }

}
