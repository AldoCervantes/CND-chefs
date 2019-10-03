import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() name: String = 'Masaharu Morimoto';
  @Input() email: String = 'morimoto@foodnetwork.com';

  @Output() profileSelected: EventEmitter<String> =  new EventEmitter();

  style: object = {
    'color': 'black',
  };

  handleClick() {
    this.profileSelected.emit(this.name);
  }

  toggleColor() {
    if (this.style['color'] === 'black') {
      this.style['color'] = 'red';
    } else {
        this.style['color'] = 'black';
    }
  }

  getStyle() {
    return this.style;
  }

  select() {
    this.toggleColor();
  }
  constructor() { }

  ngOnInit() {
  }

}
