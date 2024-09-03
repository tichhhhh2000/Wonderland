import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

   //  variables van arriba del constructor
   username: string = "";
   email: string = "";
   password: string = "";
   password2: string = "";

   correoVal : boolean = false;
   contraVal : boolean = false;
   contraIgual : boolean = false;
 
   constructor(private router: Router, private alertController: AlertController, private toastController: ToastController) { }
   // router: para ir de una pagina a otra
   // funciones van debajo del constructor
   // this. es para llamar la funcion
   registrarse() {
     let navegationextras: NavigationExtras = {
       state:{
         usernameEnviar: this.username,
         emailE: this.email,
         passwordE: this.password
       }
     }
 
     this.router.navigate(['/login'] ,navegationextras)
     
   }

   async generarAlerta(mensaje: string) {
    const alerta = await this.alertController.create({
      header: 'Error', 
      message: mensaje,
      buttons: ['Ok']
    })
    await alerta.present();
  }

  async generarToast() {
    const toast = await this.toastController.create({
      message: 'Cuenta creada exitosamente',
      duration: 3000,
      position: 'bottom'
    })
    await toast.present();
  }

  validarCorreo(correo: string)  {
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    return patron.test(correo);
  }

  validarPassword(password: string) {
    const patron = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@#$!%_?&])[A-Za-z\d@#$!%_?&]{8,}$/;
    return patron.test(password);
  }

  validacion() {
    if (!this.username || !this.email || !this.password || !this.password2) {
      this.generarAlerta('Rellene todos los campos');
      return
    } 

    this.correoVal = false;
    this.contraVal = false;
    this.contraIgual = false;

    if (!this.validarCorreo(this.email)) {
      this.correoVal = true;
    } 
    if (!this.validarPassword(this.password)) {
      this.contraVal = true;
    }
    if (this.password !== this.password2) {
      this.contraIgual = true;
    }
    if (this.correoVal ||  this.contraVal || this.contraIgual) {
      return;
    }
    this.registrarse();
  }

  ngOnInit() {
  }

}
