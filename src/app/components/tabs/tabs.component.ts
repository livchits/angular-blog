import { UsersListComponent } from './../../users/users-list/users-list.component';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { links } from 'src/app/constants/links';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  lastWordRoute: string = '';

  tabLinks = links;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.lastWordRoute = `/${event.url
          .split('/')
          .filter((item: string) => !parseInt(item))
          .at(-1)}`;
      });
  }
}
