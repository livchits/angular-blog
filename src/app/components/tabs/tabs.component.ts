import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  links: string[] = ['Usuarios', 'Posteos', 'Albumes'];
  activeLink = this.links[0];
}
