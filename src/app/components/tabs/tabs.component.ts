import { Component, OnInit } from '@angular/core';
import { links } from 'src/app/constants/links';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tabLinks = links;
  activeLink = this.tabLinks[0];
}
