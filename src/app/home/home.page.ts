import { Component } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
  import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Variables
  nombre: string = "";
  valor: string = "";

  constructor(private alertcontroller: AlertController, private storage: NativeStorage) {}

  crear(){
    this.storage.setItem(this.nombre, this.valor);
    this.presentAlert("Valor: " + this.valor)
  }

  async presentAlert(msg:string){
    const alert = await this.alertcontroller.create({
      header: 'info',
      message: msg,
      buttons: ['Ok']
    });
    
    await alert.present();
  }
}
