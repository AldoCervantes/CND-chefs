import { Component } from '@angular/core';
import { ChefsService } from './chefs.service';
import { Chef } from './chef';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chefs';
  selection: String = '';
  chefs: Chef[];

  constructor(private chefsService: ChefsService) {  }

  ngOnInit() {
    this.getChefs();
    this.chefsService.setCallbacks(() => this.getChefs());
  }

  getChefs(): void {
    this.chefs = this.chefsService.getChefs();
  }

  handleProfileClick(name) {
    this.selection = name;
  }

}
