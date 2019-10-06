import { Injectable } from '@angular/core';
import chefs from './../chefs.js';
import { Chef } from './chef';

@Injectable({
  providedIn: 'root'
})
export class ChefsService {
  private chefs: Chef[] = chefs;
  private callbacks: Function[] = [];

  constructor() { }

  getChefs(): Chef[] {
    return [ ... this.chefs];
  }

  setCallbacks(callback: Function): void {
    this.callbacks.push(callback);
  }

  add(chef: Chef) {
    chefs.push(chef);
    this.callbacks.forEach(cb => void cb());
  }
}
