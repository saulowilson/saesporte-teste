import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent {
  cards = [
    {
      icon: 'ri-bit-coin-fill',
      title: '$8520.50',
      text: 'Market Cap: $151.45B',
      image: '/assets/svg/bitcoin.svg',
      background: 'bg-blue'
    },
    {
      icon: 'ri-bit-coin-fill',
      title: '$8520.50',
      text: 'Market Cap: $151.45B',
      image: '/assets/svg/bitcoin.svg',
      background: 'bg-pink'
    },
    {
      icon: 'ri-bit-coin-fill',
      title: '$8520.50',
      text: 'Market Cap: $151.45B',
      image: '/assets/svg/bitcoin.svg',
      background: 'bg-orange'
    },
    {
      icon: 'ri-bit-coin-fill',
      title: '$8520.50',
      text: 'Market Cap: $151.45B',
      image: '/assets/svg/bitcoin.svg',
      background: 'bg-purple'
    }
  ]
}
