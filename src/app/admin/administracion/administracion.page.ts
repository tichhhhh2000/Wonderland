import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
})
export class AdministracionPage implements OnInit {

  constructor(private router: Router, private toastController: ToastController) { }


  async generarToast() {
    const toast = await this.toastController.create({
      message: 'Cerraste Sesión',
      duration: 2000,
      position: 'top'
    })
    await toast.present();
  }

  toastAlbum() {
    this.generarToast();
  }

  ngOnInit() {
  }

}
