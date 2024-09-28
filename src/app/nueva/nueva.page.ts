import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.page.html',
  styleUrls: ['./nueva.page.scss'],
})
export class NuevaPage implements OnInit {
  nombre: string = "";

  constructor(private alertcontroller: AlertController, private storage: NativeStorage) { }

  buscar(){
    this.storage.getItem(this.nombre)
    .then(data => {
      this.presentAlert(data);
    })
    .catch(error => {
      this.presentAlert("No se encontro el valor: " + error)
    })
  }

  async presentAlert(msg:string){
    const alert = await this.alertcontroller.create({
      header: 'info',
      message: msg,
      buttons: ['Ok']
    });
    
    await alert.present();
  }

  ngOnInit() {
  }

}