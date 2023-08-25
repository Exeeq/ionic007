import { Injectable } from '@angular/core';
import { Jugador } from '../pages/jugadores/jugadores.model';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  jugadores: Jugador[] = [
    {
      id: '1',
      nombre: 'Kobe Bryant',
      imagen: 'https://saposyprincesas.elmundo.es/wp-content/uploads/2020/03/kobe-bryant.jpg',
      fecha: '1978-2020',
      descripcion: 'Kobe Bean Bryant ​fue un baloncestista estadounidense que jugaba en la posición de escolta. Disputó veinte temporadas en la NBA, todas ellas en Los Angeles Lakers. Hijo del exjugador de baloncesto Joe Bryant, ​está considerado como uno de los mejores baloncestistas de todos los tiempos.',
    },
    {
      id: '2',
      nombre: 'Shaquille Oneal',
      imagen: 'https://fichadeportiva.com/wp-content/uploads/2019/07/shaquille-oneal-la-lakers-e1562813023790.png?w=845',
      fecha: '2023',
      descripcion: 'Kobe Bean Bryant ​fue un baloncestista estadounidense que jugaba en la posición de escolta. Disputó veinte temporadas en la NBA, todas ellas en Los Angeles Lakers. Hijo del exjugador de baloncesto Joe Bryant, ​está considerado como uno de los mejores baloncestistas de todos los tiempos.',
    },
    {
      id: '3',
      nombre: 'Tracy McGrady',
      imagen: 'https://cdn-wp.thesportsrush.com/2022/12/b3dc1044-untitled-design-2022-12-25t145231.861.jpg?w=3840&q=60',
      fecha: '2023',
      descripcion: 'Tracy Lamar McGrady Jr, nacido el 24 de mayo de 1979 en Bartow, Florida, es un exjugador de baloncesto que disputó 15 temporadas en la NBA. Con 2,03 metros podía jugar tanto de alero como de escolta. McGrady entró en la NBA directamente desde el instituto, sin pasar por la universidad.',
    },
  ]

  constructor() { }

  // MÉTODOS CUSTOM

  //Método que devuelve objeto completo
  getAll() {
    return [...this.jugadores]
  }

  //Método que devuelve un jugador filtrado por el id buscado
  getJugador(id: string) {
    return {
      ...this.jugadores.find( aux => {
        return aux.id === id
      }

      )
    }
  }

  //Método que agrega un jugador
  addJugador(nombre: string, imagen: string, fecha: string, descripcion: string) {
    this.jugadores.push({
      nombre, imagen, fecha, descripcion, id: this.jugadores.length + 1 + ""
    })
  }

  //Método que elimna un jugador por el id
  deleteJugador(id: string){
    this.jugadores = this.jugadores.filter(aux => {
      return aux.id !== id
    })
  }


}
