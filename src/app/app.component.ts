import { Component, OnInit } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';

 class CarBrand {
  private make: string;
  constructor(theMake: string) {
    this.make = theMake;
  }
}
class Honda extends CarBrand {

  // private year: number;
  // protected model: string;
  constructor(protected year: number, make: string, private model: string) {
    super(make);
    // (code ide)TS is saying that 'make' can't be used becuse of it being private but, for some reason its still being console log. Is it in the wrong place?
    console.log(this.make);
    console.log(this.year);
    console.log(this.model);
    // this.year = year;
    // this.model = model;

  }
  getDetails() {
    return `their are ${this.year} ${this.make} and their ${this.model} `;
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
  // ford: CarBrand = new CarBrand ('Ford');
  ngOnInit() {
    // this.theseCars();

  }
  theseCars() {
    const f = new Honda(2, 'Dogs', 'not a car');
    console.log(f.getDetails());
    return f.getDetails();
  }
}
