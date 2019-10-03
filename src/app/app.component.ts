import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chefs';
  selection: String = '';

  chefs: Object[] = [
    {
        'name': 'Bobby Flay',
        'email': 'flay@foodnetwork.com'
    },
    {
        'name': 'Masaharu Morimoto',
        'email': 'morimoto@foodnetwork.com'
    },
    {
        'name': 'Cat Cora',
        'email': 'cora@foodnetwork.com'
    }
  ];

  handleProfileClick(name) {
    this.selection = name;
  }
}
