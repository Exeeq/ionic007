import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(private jugadorService: JugadoresService,
              private router: Router,
              private toastController:ToastController,
              private alertController:AlertController,) { }

  ngOnInit() {
  }

  //Método que muestra mensajes en pantalla
  async mensajeToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    })
    toast.present()
  }

  addJugador(nombre: any, imagen: any, fecha: any, descripcion: any){
    this.jugadorService.addJugador(nombre.value, imagen.value, fecha.value, descripcion.value);
    this.mensajeToast("JUGADOR AGREGADO!")
    this.router.navigate(['/jugadores']);
  }



  
}
