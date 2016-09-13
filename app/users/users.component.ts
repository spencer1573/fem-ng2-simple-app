import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'users',
  template: '<h1>Users</h1>'
})
export class Users implements OnInit {

  ngOnInit() {
    alert("#winning!");
  }

}
