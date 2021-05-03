import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public cs: CurrencyService, private toastController: ToastController) {}

  Object=Object;
  result:any = '';
  data: any = '';
  value:number;
  res='';

  convert(){
    if(!this.value || Object.keys(this.cs.result).length == 0){
      this.presentToast('Something went wrong');
      return;
    }
    var finalValue = this.value*this.cs.exachnageRate;

    this.res=this.value+' '+this.cs.from+' = '+finalValue.toFixed(3)+' '+this.cs.to;
    console.log(this.value);
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2500,
      color: "light"
    });
    toast.present();
  }

  changeBaseCurrency(){
    this.res=''
    this.cs.getLatestData()
  }

  changeTargetCurrency(){
    this.res='';
    this.cs.calcExchangeRate()
  }

}
