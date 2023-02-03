import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular';
  description = 'Welcome to our first angular project. Start building your project with the most popular JavaScript framework.';

  months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  isAvailable=true;

  simplePipeData= "This is going really well.";

  setTrue(){
    console.log("Now we have set the value true!");
  }
  setFalse(){
    console.log("Now we have set the value true!");
  }

  firstFeature={
    header: "Feature One",
    body: "Some small feature about our project for demo."
  }

  todaydate: any;

  public persondata=[];


  constructor(private myservice: MyserviceService){}
  
  ngOnInit(){
    this.todaydate = this.myservice.showTodayDate();

    this.myservice.getData().subscribe((data)=>{
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.persondata);
    })
  }

 
}
