import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Kitten } from '../model/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {

  @Input() favoriteKittens: Kitten[] | undefined

  constructor() { }

  ngOnInit(){
  }

}
