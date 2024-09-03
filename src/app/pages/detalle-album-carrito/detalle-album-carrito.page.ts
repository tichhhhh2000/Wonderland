import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-album-carrito',
  templateUrl: './detalle-album-carrito.page.html',
  styleUrls: ['./detalle-album-carrito.page.scss'],
})
export class DetalleAlbumCarritoPage implements OnInit {

  album: any = {
    nombre: 'Wings',
    artista: 'BTS',
    genero: 'K-pop',
    precio: '$21.990',
    portada: 'assets/icon/wings.jpg',
  }

  constructor(
    private router: Router, 
    private activaterouter: ActivatedRoute, 
    private alertController: AlertController
  ) { 
    this.activaterouter.params.subscribe(params =>{

    })
  }

  async generarEliminar (mensaje : string){
    const eliminar = await this.alertController.create({
      header: 'Producto eliminado del carrito',
      message : mensaje,
      buttons : ['Aceptar']
    })
    await eliminar.present();
  }

  aceptarEliminar(){
    this.generarEliminar('Su producto fue eliminado exitosamente')
  }

  ngOnInit() {
  }

}
