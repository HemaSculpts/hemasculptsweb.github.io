import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
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
