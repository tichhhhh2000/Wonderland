import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private router: Router, private toastController: ToastController, private menuController: MenuController) { }


  async generarToast() {
    const toast = await this.toastController.create({
      message: 'Cerraste Sesión',
      duration: 2000,
      position: 'top'
    });
    await toast.present();
  }

  async toastAlbum() {
    await this.generarToast(); // Mostrar el toast
    await this.menuController.close(); // Cerrar el menú rápidamente
    this.router.navigate(['/login']); // Redirigir al usuario a la página de login
  }
}


