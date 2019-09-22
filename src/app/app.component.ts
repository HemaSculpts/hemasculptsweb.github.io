import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../app/app.component.html',
  styleUrls: ['/src/app/app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';

  //constructor(private route: ActivatedRoute) {}

  //ngOnInit() {
    //console.log(this.route.snapshot.paramMap);
  //this.route.queryParams.subscribe(params => {
    //console.log("queryParams:"+params);
//})

  //}

}
