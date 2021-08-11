import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  users: User[] = [];

  getUsers(): void {
    this.usersService.getUsers().subscribe((users) => (this.users = users));
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
