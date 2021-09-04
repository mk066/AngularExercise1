import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {
  //1stexer var
  stringByUser='';   
  stringSaved='';            
  allowbutton=true;     
  enteredString=false;

  //2ndexer var
  nameOfUser='';
  ageOfUser='';
  obj:any=[{name:'', age:''}];
  hideBtn=false;

  //3rdexer var
  arr=[];
  namearr='';
  agearr='';

  //4thexer var
  oddEven:any;

  constructor() { }

  ngOnInit(): void {
  }

  //1stexer func

  afterClick(){
    this.allowbutton=false;
    this.enteredString=true;
    this.stringSaved=this.stringByUser;
    this.stringByUser="";     //to empty input field
  }

  enableButton(){                 //enable button
    this.allowbutton=true;    
    this.enteredString=false;
  }

  //2ndexer func

  getNameAge(){
    this.obj.push({name:this.nameOfUser, age:this.ageOfUser})     //display output
  }

  hideUnhideBtn(){
    this.hideBtn=!this.hideBtn;   //hide and unhide button
  }

  //3rdexer func

  getNameAgeArr(){
    this.arr.push({name:this.namearr, age:this.agearr});    //display output
  }

  //4thexer func

   clearInp(){
    this.oddEven="";      //clear the input field
  }

}
