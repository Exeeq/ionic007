import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Jugadores', url: 'jugadores', icon: 'people-circle' },
    { title: 'Equipos', url: 'equipos', icon: 'people' },
    { title: 'Estadisticas', url: 'archived', icon: 'analytics' },
    { title: 'Campeon', url: 'trash', icon: 'medal' },
    { title: 'Fichaje', url: 'spam', icon: 'person-add' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
