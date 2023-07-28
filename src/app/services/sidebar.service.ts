import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isSidebarCollapsed: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isSidebarCollapsed$: Observable<boolean> =
    this.isSidebarCollapsed.asObservable();

  toggleSidebar() {
    this.isSidebarCollapsed.next(!this.isSidebarCollapsed.value);
  }
}
