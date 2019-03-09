import {Component} from '@angular/core';
import {AlertController} from '@ionic/angular';

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

    constructor(public alertController: AlertController) {}

    onConfirmBtn() {
        // console.log('It works!');
        if (this.reasonInput.trim().length <= 0 || this.amountInput <= 0) {
            // alert('Invalid values!');
            this.presentAlert();
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

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Invalid inputs',
            // subHeader: 'Subtitle',
            message: 'Please enter a valid reason and amount.',
            buttons: ['OK']
        });

        await alert.present();
    }

}
