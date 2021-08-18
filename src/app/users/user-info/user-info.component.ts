import { links } from 'src/app/constants/links';
import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  userLinks = links.filter(({ path }) => path !== '/users');

  currentPath = window.location.pathname;

  user?: User;

  getUser(): void {
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId) {
      this.usersService.getUser(userId).subscribe((user) => (this.user = user));
    }
  }

  ngOnInit(): void {
    this.getUser();
  }
}
