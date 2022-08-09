import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-users',
  templateUrl: './block-users.component.html',
  styleUrls: ['./block-users.component.css']
})
export class BlockUsersComponent implements OnInit {

  constructor() { }

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  displayAge : boolean = false;
  btnAge : string = "Show Age"

  toggle() {
    this.displayAge = !this.displayAge;

      if(this.displayAge){
        this.btnAge = "Hidden Age"
      }else{
        this.btnAge = "Show Age"
      }

  }

  ngOnInit(): void {
  }

}
