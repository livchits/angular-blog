import { links } from 'src/app/constants/links';
import { UsersService } from './../users.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.scss'],
})
export class UsersInfoComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  userLinks = links.filter(({ path }) => path !== '/users');

  currentPath = window.location.pathname;

  @Input() user?: User;

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usersService.getUser(id).subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {
    this.getUser();
  }
}
