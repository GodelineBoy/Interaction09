import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Kitten } from '../model/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent{

  kittenAdd: boolean | undefined
// création d'un formulaire avec formGroup/formControlName/Validator
  kittenForm = this.fb.group({
    nameKitten: ['', [Validators.required]],
    raceKitten: ['', [Validators.required]],
    birthdayKitten: ['',[Validators.required]],
    pictureKitten: ['',[Validators.required]],
  }); 
//@Output pour envoyer élement à la liste de chats preparation passerelle - sendnewkitten=propriete kids(form)
  @Output()sendNewKitten: EventEmitter<Kitten> = new EventEmitter<Kitten>();
  
//méthod de la propriete kids(form) pour création d'une nouvelle carte + form a jour vide qd submit + add 'OK'
  createNewKitten(){
    this.sendNewKitten.emit(new Kitten(
      this.kittenForm.controls.nameKitten.value,
      this.kittenForm.controls.raceKitten.value,
      this.kittenForm.controls.birthdayKitten.value,
      this.kittenForm.controls.pictureKitten.value,))
    this.kittenForm.reset
    this.kittenAdd = true;
    console.log(this.sendNewKitten)
  }


  constructor(private fb: FormBuilder) { 
   this.kittenAdd = false
  }


  
}
