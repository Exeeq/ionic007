import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from './jugadores.model';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.page.html',
  styleUrls: ['./jugadores.page.scss'],
})
export class JugadoresPage implements OnInit {

  listaJugadores: Jugador[] = [];
  constructor(private jugadoresService: JugadoresService,
              private router:Router) { }

  //Método que se ejecuta cuando se crea la página
  ngOnInit() {
    this.listaJugadores = this.jugadoresService.getAll()
  }

  //Método que se ejecuta cuando uno vuelve a la página
  ionViewWillEnter() {
    this.listaJugadores = this.jugadoresService.getAll()
  }

  listar(){
    this.listaJugadores = this.jugadoresService.getAll()
  }

  addJugador() {
    this.router.navigate(['/agregar']);
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.listar();
      event.target.complete();
    }, 2000);
  }
}

