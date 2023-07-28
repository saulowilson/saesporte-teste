import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { BuySellPageComponent } from './pages/buy-sell/buy-sell.component';
import { TransactionsPageComponent } from './pages/transactions/transactions.component';
import { ExchangePageComponent } from './pages/exchange/exchange.component';
import { ToolsPageComponent } from './pages/tools/tools.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'buy-sell', component: BuySellPageComponent },
  { path: 'transactions', component: TransactionsPageComponent },
  { path: 'exchange', component: ExchangePageComponent },
  { path: 'tools', component: ToolsPageComponent },
  { path :'', redirectTo: 'dashboard',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
