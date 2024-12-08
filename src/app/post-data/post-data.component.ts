import { Component } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent {
 constructor(private httpServerService: HttpServerService){}

 public ngOnInit():void {
  const payload = {"body":"some comments2", "postId":2}
  this.httpServerService.postData(payload).subscribe(data => {
    console.log('du lieu duoc post ', data);
  });
 }
}
