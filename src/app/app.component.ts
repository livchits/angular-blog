import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog';
  links: string[] = ['Usuarios', 'Posteos', 'Albumes'];
  activeLink = this.links[0];
}
