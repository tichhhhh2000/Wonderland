import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.page.html',
  styleUrls: ['./libreria.page.scss'],
})
export class LibreriaPage implements OnInit {

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
    {
      nombre: 'The Astronaut',
      artista: 'JIN',
      precio: '$23.990',
      portada: 'assets/icon/astronaut.jpg',
    },
    {
      nombre: 'D-DAY',
      artista: 'Agust D',
      precio: '$25.990',
      portada: 'assets/icon/d_day.jpg',
    },
  ];

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
