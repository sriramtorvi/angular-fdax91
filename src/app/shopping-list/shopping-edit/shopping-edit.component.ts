import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static: true}) nameInput
  @ViewChild('amountInput',{static: true}) amountInput
  onIngredientAdded
  constructor() { }

  ngOnInit() {
  }

  onClickAdd(){

  }
}
