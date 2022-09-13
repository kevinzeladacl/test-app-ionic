import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private dataService: DataService,) {}

  test(){
    this.dataService.testAPI().then( (result) => {
      console.log(result);
    }, (err) => {
     console.log(err.errors);
    });
  }

}


