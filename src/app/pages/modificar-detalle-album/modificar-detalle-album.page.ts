import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modificar-detalle-album',
  templateUrl: './modificar-detalle-album.page.html',
  styleUrls: ['./modificar-detalle-album.page.scss'],
})
export class ModificarDetalleAlbumPage implements OnInit {

  nombreArtista: string = 'BTS';
  nombreAlbum: string = 'Wings';
  precio: number = 21990;

  album: any = {
    nombre: 'Wings',
    artista: 'BTS',
    precio: '$21.990',
    portada: 'assets/icon/wings.jpg',
  }

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
    if (!this.nombreArtista || !this.nombreAlbum || !this.precio ) {
      this.generarAlerta('Rellene todos los campos');
    } else if (this.precio <= 0){
      this.generarToast('El precio debe ser mayor a 0'); 
    } else {
      this.generarToast('El álbum ha sido modificado con éxito');
      this.router.navigate(['/modificar-album']);
    }
  }

  ngOnInit() {
  }

}
