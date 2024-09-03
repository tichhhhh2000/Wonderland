import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-album',
  templateUrl: './detalle-album.page.html',
  styleUrls: ['./detalle-album.page.scss'],
})
export class AlbumComponent implements OnInit {
  
  album: any = {
    nombre: 'Wings',
    artista: 'BTS',
    genero: 'K-pop',
    precio: '$21.990',
    portada: 'assets/icon/wings.jpg',
  }

  constructor(private router: Router, private toastController: ToastController) { }


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

  async guardarToast() {
    const toast = await this.toastController.create({
      message: 'Álbum guardado',
      duration: 2000,
      position: 'top'
    })
    await toast.present();
  }

  guardarAlbum() {
    this.guardarToast();
  }
  ngOnInit() {
  }
}
