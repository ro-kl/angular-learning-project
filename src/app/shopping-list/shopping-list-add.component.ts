import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  @Input() selectedIngredient: Ingredient;
  @Output() cleared = new EventEmitter();
  isAdd: boolean = true;
  formGroup: FormGroup;

  constructor(private shoppingListService: ShoppingListService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: [this.selectedIngredient.name, Validators.required],
      amount: [this.selectedIngredient.amount, Validators.required]
    });
  }

  ngOnChanges(changes: any) {
    debugger;
    if (changes.selectedIngredient.currentValue == null) {
      this.selectedIngredient = { name: null, amount: null }
      this.isAdd = true;
    } else {
      this.formGroup.patchValue({
        name: changes.selectedIngredient.currentValue.name, 
        amount: changes.selectedIngredient.currentValue.amount
      });
      this.isAdd = false;
    }
  }

  onSubmit() {
    const { name, amount } = this.formGroup.value;
    const newIngredient = new Ingredient(name, amount);

    if (!this.isAdd) {
      this.shoppingListService.editIngredient(this.selectedIngredient, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }

    this.onClear();
  }

  onClear() {
    this.formGroup.reset();
    this.cleared.emit();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.selectedIngredient);
    this.onClear();
  }
}
