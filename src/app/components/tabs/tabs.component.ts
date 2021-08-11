import { Component, OnInit } from '@angular/core';

type Link = {
  label: string;
  path: string;
};

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  links: Link[] = [
    { label: 'Usuarios', path: '/users' },
    { label: 'Posteos', path: '/posts' },
    { label: 'Albumes', path: '/albums' },
  ];

  activeLink = this.links[0];
}
