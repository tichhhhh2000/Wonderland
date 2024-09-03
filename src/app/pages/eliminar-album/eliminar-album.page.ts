import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-eliminar-album',
  templateUrl: './eliminar-album.page.html',
  styleUrls: ['./eliminar-album.page.scss'],
})
export class EliminarAlbumPage implements OnInit {

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
    {
      nombre: 'FACE',
      artista: 'JIMIN',
      precio: '$26.990',
      portada: 'assets/icon/face.jpg',
    },
    {
      nombre: 'Jack In The Box',
      artista: 'J-Hope',
      precio: '$24.990',
      portada: 'assets/icon/jack_in_the_box.jpg',
    },
    {
      nombre: 'Golden',
      artista: 'JungKook',
      precio: '$29.990',
      portada: 'assets/icon/jk_golden.jpg',
    },
    {
      nombre: 'Muse',
      artista: 'JIMIN',
      precio: '$29.990',
      portada: 'assets/icon/muse.jpg',
    },
    {
      nombre: 'Are You Late Too [O!RUL8,2]',
      artista: 'BTS',
      precio: '$23.990',
      portada: 'assets/icon/ohareyou.jpg',
    },
    {
      nombre: '2 COOL 4 SKOOL',
      artista: 'BTS',
      precio: '$17.990',
      portada: 'assets/icon/2kool4.jpg',
    },
    {
      nombre: 'Dark & Wild',
      artista: 'BTS',
      precio: '$25.990',
      portada: 'assets/icon/dark_wild.jpg',
    },
    {
      nombre: 'Map Of The Soul Persona',
      artista: 'BTS',
      precio: '$24.990',
      portada: 'assets/icon/persona.jpg',
    },
    {
      nombre: 'Skool Luv Affair',
      artista: 'BTS',
      precio: '$23.990',
      portada: 'assets/icon/skool_luv.jpg',
    },
    {
      nombre: 'The Most Beautiful Moment in Life PT.1',
      artista: 'BTS',
      precio: '$20.990',
      portada: 'assets/icon/the_most_1.jpg',
    },
    {
      nombre: 'The Most Beautiful Moment in Life PT.2',
      artista: 'BTS',
      precio: '$20.990',
      portada: 'assets/icon/the_most_2.jpg',
    },
    {
      nombre: 'Indigo',
      artista: 'RM',
      precio: '$26.990',
      portada: 'assets/icon/indigo.jpg',
    },
    {
      nombre: 'Golden Hour Part.1',
      artista: 'ATEEZ',
      precio: '$29.990',
      portada: 'assets/icon/golden_hour.jpg',
    },
    {
      nombre: 'The World Ep.Fin : Will',
      artista: 'ATEEZ',
      precio: '$27.990',
      portada: 'assets/icon/michinpum.jpg',
    },
    {
      nombre: 'The World Ep.2 : Outlaw',
      artista: 'ATEEZ',
      precio: '$28.990',
      portada: 'assets/icon/bouncy.jpg',
    },
    {
      nombre: 'The World Ep.1 : Movement',
      artista: 'ATEEZ',
      precio: '$27.990',
      portada: 'assets/icon/guerrilla.jpg',
    },
    {
      nombre: 'Zero : Fever Part.1',
      artista: 'ATEEZ',
      precio: '$32.990',
      portada: 'assets/icon/fever_1.jpg',
    },
    {
      nombre: 'Zero : Fever Part.2',
      artista: 'ATEEZ',
      precio: '$29.990',
      portada: 'assets/icon/fever_2.jpg',
    },
    {
      nombre: 'Zero : Fever Part.3',
      artista: 'ATEEZ',
      precio: '$29.990',
      portada: 'assets/icon/fever_3.jpg',
    },
    {
      nombre: 'Beyond : Zero (Limited Edition)',
      artista: 'ATEEZ',
      precio: '$40.990',
      portada: 'assets/icon/rocky.jpg',
    },
    {
      nombre: '(Pre-Venta) Fix On / Off',
      artista: 'MINGI',
      precio: '$64.990',
      portada: 'assets/icon/Mingi.jpg',
    },
    {
      nombre: 'Treasure Ep.1 : All To Zero',
      artista: 'ATEEZ',
      precio: '$20.990',
      portada: 'assets/icon/treasure_1.jpg',
    },
    {
      nombre: 'Treasure Ep.2 : Zero To One',
      artista: 'ATEEZ',
      precio: '$24.990',
      portada: 'assets/icon/treasure_2.jpg',
    },
    {
      nombre: 'Treasure Ep.3 : One To All',
      artista: 'ATEEZ',
      precio: '$17.990',
      portada: 'assets/icon/treasure_3.jpg',
    },
    {
      nombre: 'Treasure Ep.Fin : All To Action',
      artista: 'ATEEZ',
      precio: '$20.990',
      portada: 'assets/icon/treasure_fin_all.jpg',
    },
    {
      nombre: 'Romance : Untold',
      artista: 'ENHYPEN',
      precio: '$28.990',
      portada: 'assets/icon/xo.jpg',
    },
    {
      nombre: 'Orange Blood',
      artista: 'ENHYPEN',
      precio: '$26.990',
      portada: 'assets/icon/orange_blood.jpg',
    },
    {
      nombre: 'Dark Blood',
      artista: 'ENHYPEN',
      precio: '$27.990',
      portada: 'assets/icon/dark_blood.jpg',
    },
    {
      nombre: 'Border : Day One',
      artista: 'ENHYPEN',
      precio: '$31.990',
      portada: 'assets/icon/given_taken.jpg',
    },
    {
      nombre: 'Dimension : Dilema',
      artista: 'ENHYPEN',
      precio: '$16.990',
      portada: 'assets/icon/dimension_dilemma.jpg',
    },
    {
      nombre: 'Memorabilia',
      artista: 'ENHYPEN',
      precio: '$31.990',
      portada: 'assets/icon/memorabilia.jpg',
    },
  ];
  

  constructor(private router: Router, private toastController: ToastController) { }


  async generarToast() {
    const toast = await this.toastController.create({
      message: 'Álbum eliminado exitosamente',
      duration: 3000,
      position: 'top'
    })
    await toast.present();
  }

  validacion() {
    this.generarToast();
  }

  ngOnInit() {
  }

}
