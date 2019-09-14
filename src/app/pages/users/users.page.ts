import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor( private usersService: UsersService) { }

  ngOnInit() {

    this.usersService.getUsers().subscribe((data) => {
      console.log(data);
    });
  }

}
