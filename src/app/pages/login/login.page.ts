import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  userValidacion: string = "";
  passValidacion: string = "";

  userAdmin: string = "admin";
  passAdmin: string = "fate123";



  constructor(private router: Router, private activaterouter: ActivatedRoute, private alertController: AlertController) {
    this.activaterouter.params.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.userValidacion = this.router.getCurrentNavigation()?.extras?.state?.['usernameEnviar'];
        this.passValidacion = this.router.getCurrentNavigation()?.extras?.state?.['passwordE'];
      }
    })
  }

  async generarAlerta(mensaje: string) {
    const alerta = await this.alertController.create({
      header: 'Error', 
      message: mensaje,
      buttons: ['Aceptar']
    })
    await alerta.present();
  }

  iniciarSesion() {
    if (!this.username || !this.password) {
      this.generarAlerta('Rellene los campos');
    } else if (this.username === this.userValidacion && this.password === this.passValidacion) {
      this.router.navigate(['/home']);
    } else if (this.username === this.userAdmin && this.password === this.passAdmin) {
      this.router.navigate(['/administracion']);
    } else if (!this.userValidacion || !this.passValidacion) {
      this.generarAlerta('No tienes una cuenta creada')
    } else {
      this.generarAlerta('Los datos no coinciden');
    }
  }

  ngOnInit() {
  }
}

