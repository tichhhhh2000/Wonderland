import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  albums: any [] = [
    {
      nombre: 'Wings',
      artista: 'BTS',
      precio: '$21.990',
      portada: 'assets/icon/wings.jpg',
    },
    {
      nombre: 'Layover',
      artista: 'V',
      precio: '$16.990',
      portada: 'assets/icon/layover.jpg',
    },
    {
      nombre: 'Proof',
      artista: 'BTS',
      precio: '$79.990',
      portada: 'assets/icon/proof.jpg',
    },
    {
      nombre: 'Butter',
      artista: 'BTS',
      precio: '$26.990',
      portada: 'assets/icon/butter.jpg',
    },
    {
      nombre: 'Love Yourself Her',
      artista: 'BTS',
      precio: '$23.990',
      portada: 'assets/icon/love_your_her.jpg',
    },
    {
      nombre: 'Love Yourself Tear',
      artista: 'BTS',
      precio: '$23.990',
      portada: 'assets/icon/love_your_tear.jpg',
    },
    {
      nombre: 'Love Yourself Answer',
      artista: 'BTS',
      precio: '$24.990',
      portada: 'assets/icon/love_your_answer.jpg',
    },
    {
      nombre: 'Map Of The Soul 7',
      artista: 'BTS',
      precio: '$31.990',
      portada: 'assets/icon/map_of_the_soul.jpg',
    },
  ]



  constructor(
    private router: Router, 
    private activaterouter: ActivatedRoute, 
    private alertController: AlertController) 
    {
    this.activaterouter.params.subscribe(param => {
      
    })
  }

  async generarCompra (mensaje : string ){
    const compra = await this.alertController.create({
      header: 'Confirmación de compra',
      message : mensaje,
      buttons: ['Aceptar']
    })
    await compra.present();
  }

  aceptarCompra(){
    this.generarCompra('Su compra fue realizada con éxito')
  }

  ngOnInit() {

  }

}
