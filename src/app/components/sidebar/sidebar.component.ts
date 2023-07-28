import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-data';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  navData = navbarData;
  isSidebarOpen: boolean = true;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.isSidebarCollapsed$.subscribe((isOpen) => {
      this.isSidebarOpen = isOpen;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
