import { Component, OnInit } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';

 class CarBrand {
  protected make: string;
  constructor(theMake: string) {
    this.make = theMake;
  }
}
class Car extends CarBrand {

  private year: number;
  protected model: string;
  constructor(year: number, make: string, model: string) {
    super(make);
    this.year = year;
    this.model = model;
    console.log('make :'+ this.make);
    console.log('year:' +  this.year);
    console.log("model:" + this.model);

  }
  getDetails() {
    return `This is an exmpale ${this.year} ${this.make} ${this.model}. `;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  show: any = this.theseCars();
  ford: CarBrand = new CarBrand ('Ford');
  ngOnInit() {
    // this.theseCars();

  }
  theseCars() {
    const f = new Car(1999, 'Handa', 'ts-130');
    console.log(f.getDetails());
    return f.getDetails();
  }
}
