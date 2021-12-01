import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../model/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {

  kittens: Kitten[]
  adoptKitten: Kitten[]

  //ajoute le chaton au tableau de chatons

  addNewKitten(kitten: Kitten){
    this.kittens.push(kitten)
  }
  
  constructor() {
    this.kittens = [new Kitten("sawyer", "Européen", "2020-10-07", "https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_960_720.jpg")]
    this.adoptKitten = []
  }

  ngOnInit(): void {
  }
//ajoute le chaton au tableau favo de chatons
addKittenOnFavorite(newKitten: Kitten){
  this.adoptKitten.push(newKitten)
  for(let i=0; i < this.kittens.length; i++){
    if (this.kittens[i] === newKitten){
      this.kittens.splice(i, 1)
    }
  }}
}
