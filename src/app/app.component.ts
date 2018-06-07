import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  typeA: null  = null
  typeB: undefined = undefined;
  typeC: number = 12;
  typeD: string = 'tiger';
  typeE: boolean = true;
  typeArray: any[] = [true, 12, 'tiger', null, undefined];
  ngOnInit() {
    console.log(this.typeArray);
  }

}

