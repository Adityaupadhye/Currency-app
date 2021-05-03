import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  from=''
  to=''
  exachnageRate=0
  result:any={}

  allCurrencies={
  "GBP": 'Great Britain Pound',
  "HKD": 'Hong Kong Dollar',
  "IDR": 'Indonesian Rupiah',
  "ILS": 'Israeli Sheqel',
  "DKK": 'Danish Kroner',
  "INR": 'Indian Rupee',
  "CHF": 'Swiss Franc',
  "MXN": 'Mexican Peso',
  "CZK": 'Czech Koruna',
  "SGD": 'Singapore Dollar',
  "THB": 'Thai Baht',
  "HRK": 'Croatian Kuna',
  "EUR": 'Euro',
  "MYR": 'Malaysian Ringgit',
  "NOK": 'Norwegian Krone',
  "CNY": 'Chinese Renminbi',
  "BGN": 'Bulgarian Lev',
  "PHP": 'Philippine Peso',
  "PLN": 'Polish Zloty',
  "ZAR": 'South African Rand',
  "CAD": 'Canadian Dollar',
  "ISK": 'Iceland Krona',
  "BRL": 'Brazilian Real',
  "RON": 'Romanian Leu',
  "NZD": 'New Zealand Dollar',
  "TRY": 'Turkish Lira',
  "JPY":'Japan Yen',
  "RUB":'Russian Ruble',
  "KRW":'South Korea Won',
  "USD":'US Dollar',
  "AUD":'Australian Dollar',
  "HUF":'Hungarian Forint',
  "SEK":'Swedish Krona'}

  getLatestData(){
    this.http.get(environment.BASE_URL+'/latest?base='+this.from)
    .subscribe((res:any)=>{
      this.result=res;
      this.exachnageRate = res['rates'][this.to];
      console.log('new exchange rate: ', this.exachnageRate);
    })
  }

  calcExchangeRate(){
    this.exachnageRate=this.result['rates'][this.to]
  }


}
