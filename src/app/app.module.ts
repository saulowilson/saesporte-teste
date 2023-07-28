import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CurrencyTabComponent } from './components/currency-tab/currency-tab.component';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { BuySellPageComponent } from './pages/buy-sell/buy-sell.component';
import { TransactionsPageComponent } from './pages/transactions/transactions.component';
import { ExchangePageComponent } from './pages/exchange/exchange.component';
import { ToolsPageComponent } from './pages/tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    SidebarComponent,
    CurrencyTabComponent,
    CurrencyCardComponent,
    InfoCardComponent,
    BuySellPageComponent,
    TransactionsPageComponent,
    ExchangePageComponent,
    ToolsPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
