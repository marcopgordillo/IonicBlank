import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    reasonInput = '';
    amountInput: number;
    expensesList: {reason: string, amount: number}[] = [];
    totalExpenses = 0;

    onConfirmBtn() {
        // console.log('It works!');
        if (this.reasonInput.trim().length <= 0 || this.amountInput <= 0) {
            return;
        }
        // console.log(this.reasonInput, this.amountInput);
        this.expensesList.push({reason: this.reasonInput, amount: this.amountInput});

        this.totalExpenses += this.amountInput;

        this.clear();
    }

    clear() {
        this.reasonInput = '';
        this.amountInput = null;
    }
}
