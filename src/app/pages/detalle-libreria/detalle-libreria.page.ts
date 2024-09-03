import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-libreria',
  templateUrl: './detalle-libreria.page.html',
  styleUrls: ['./detalle-libreria.page.scss'],
})
export class DetalleLibreriaPage implements OnInit {

  album: any = {
    nombre: 'Wings',
    artista: 'BTS',
    genero: 'K-pop',
    precio: '$21.990',
    portada: 'assets/icon/wings.jpg',
  }

  constructor(private router: Router, private toastController: ToastController) { }


  async eliminarToast() {
    const toast = await this.toastController.create({
      message: 'Álbum eliminado exitosamente',
      duration: 2000,
      position: 'top'
    })
    await toast.present();
  }

  eliminarAlbum() {
    this.eliminarToast();
  }

  async agregarToast() {
    const toast = await this.toastController.create({
      message: 'Álbum agregado al carrito exitosamente',
      duration: 2000,
      position: 'top'
    })
    await toast.present();
  }

  agregarAlbum() {
    this.agregarToast();
  }

  ngOnInit() {
  }

}
