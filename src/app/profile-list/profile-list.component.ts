import { Component, OnInit } from '@angular/core';
import { ChefsService } from './../chefs.service';
import { Chef } from './../chef';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  title = 'chefs';
  selection: String = '';
  chefs: Chef[];

  constructor(private chefsService: ChefsService) {  }

  ngOnInit() {
    this.getChefs();
    this.chefsService.setCallbacks(() => this.getChefs());
  }

  getChefs(): void {
    this.chefsService.getChefs().subscribe(chefs => this.chefs = chefs);
  }

  handleProfileClick(name) {
    this.selection = name;
  }
}
