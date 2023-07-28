import { Component, OnInit } from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isSidebarOpen: boolean = true;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.isSidebarCollapsed$.subscribe((isOpen) => {
      this.isSidebarOpen = isOpen;
    });
  }
}
