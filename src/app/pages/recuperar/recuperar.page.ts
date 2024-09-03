import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

   email: string = "";
   
   emailValidacion = "";

  constructor( 
    private router: Router, 
    private activaterouter: ActivatedRoute, 
    private alertController: AlertController) {
      
     }

    async generarMensaje(mensaje : string){
      const alerta = await this.alertController.create({
        header : '',
        message : mensaje,
        buttons : ['Aceptar']
      })
      await alerta.present();
    }

    enviarCodigo(){
      this.generarMensaje('Se enviara un codigo a su correo');
    }

  

     ngOnInit() {
    }
    
  }


  


