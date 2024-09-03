import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-album',
  templateUrl: './agregar-album.page.html',
  styleUrls: ['./agregar-album.page.scss'],
})
export class AgregarAlbumPage implements OnInit {

  nombreArtista: string = '';
  nombreAlbum: string = '';
  precio!: number;

  constructor(private router: Router, private alertController: AlertController, private toastController: ToastController) { }

  

  async generarAlerta(mensaje: string) {
    const alerta = await this.alertController.create({
      header: 'Error', 
      message: mensaje,
      buttons: ['Ok']
    })
    await alerta.present();
  }

  async generarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    })
    await toast.present();
  }

  validacion() {
    if (!this.nombreArtista || !this.nombreAlbum || !this.precio) {
      this.generarAlerta('Rellene todos los campos');
    } else if (this.precio <= 0){
      this.generarToast('El precio debe ser mayor a 0');
    } else {
      this.generarToast('El álbum ha sido añadido exitosamente');
      this.router.navigate(['/administracion']);
    }
  }

  ngOnInit() {
  }

}
