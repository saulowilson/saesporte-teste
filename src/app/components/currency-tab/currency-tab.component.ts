import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-tab',
  templateUrl: './currency-tab.component.html',
  styleUrls: ['./currency-tab.component.scss'],
})
export class CurrencyTabComponent {
  activeCurrency = 'bitcoin';
  currencies = [
    {
      name: 'bitcoin',
      icon: 'ri-bit-coin-fill',
      btnClass: 'btn-purple',
      borderClass: 'border-purple',
    },
    {
      name: 'bitcoin1',
      icon: 'ri-bit-coin-fill',
      btnClass: 'btn-red',
      borderClass: 'border-red',
    },
    {
      name: 'bitcoin2',
      icon: 'ri-bit-coin-fill',
      btnClass: 'btn-blue',
      borderClass: 'border-blue',
    },
    {
      name: 'bitcoin3',
      icon: 'ri-bit-coin-fill',
      btnClass: 'btn-green',
      borderClass: 'border-green',
    },
  ];

  changeActiveCurrency(currency: string) {
    this.activeCurrency = currency;
  }
}
